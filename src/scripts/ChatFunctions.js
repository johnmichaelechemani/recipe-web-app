import {
  ref,
  onUnmounted,
  computed,
  nextTick,
  onMounted,
  watch,
  watchEffect,
  reactive,
} from "vue";
import { getUsers } from "../scripts/getUsers.js";
import { getAuth } from "firebase/auth";
import { useAuth } from "../firebase";
import { useRouter } from "vue-router";
import {
  collection,
  addDoc,
  where,
  query,
  orderBy,
  onSnapshot,
  getDoc,
  setDoc,
  doc,
  serverTimestamp,
  count,
} from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export function ChatFuntions() {
  const auth = getAuth();
  const user = ref(auth.currentUser);
  const { firestore } = useAuth();
  const storage = getStorage();
  const userId = user.value.uid;
  const userPhoto = user.value.photoURL;
  const userName = user.value.displayName;
  const route = useRouter();
  const { storedUsers } = getUsers();
  const newMessage = ref("");
  const messages = ref([]);
  const isLoading = ref(false);
  const messageContainer = ref(null);
  let selectedUser = ref({});
  let isSendMessageLoading = ref(false);

  const getChatId = (userId1, userId2) => {
    return [userId1, userId2].sort().join("_");
  };

  const yourChat = (modalId, user) => {
    const modal = document.getElementById(modalId);
    modal.showModal();
    selectedUser.value = user;
    loadMessages();
    console.log(messages);
  };
  const file = ref(null);
  const imageFile = ref(null);
  const handleFileUpdate = (newFile) => {
    file.value = newFile;
  };

  const handleImageUpdate = (newFile) => {
    imageFile.value = newFile;
  };

  const sendMessage = async () => {
    if (newMessage.value.trim() === "" && !file.value && !imageFile.value) {
      console.warn("Please enter a message or select a file");
      return;
    }
    isSendMessageLoading.value = true;
    const chatId = getChatId(userId, selectedUser.value.userId);

    // Add temporary message to the messages array with `isSending` set to true
    const tempMessage = {
      id: `temp_${Date.now()}`, // Temporary ID
      senderId: userId,
      recipientId: selectedUser.value.userId,
      message: newMessage.value,
      imageUrl: imageFile.value ? URL.createObjectURL(imageFile.value) : null,
      imageName: imageFile.value ? imageFile.value.name : null,
      fileUrl: file.value ? URL.createObjectURL(file.value) : null,
      fileName: file.value ? file.value.name : null,
      isSending: true, // Message-specific sending state
      timestamp: new Date(), // Local timestamp
    };

    messages.value.push(tempMessage);
    scrollToBottom();

    let fileUrl = null;
    let fileImageUrl = null;

    try {
      // Upload file if provided
      if (file.value) {
        const filePath = `chats/${chatId}/${Date.now()}_${file.value.name}`;
        const fileRef = storageRef(storage, filePath);
        const uploadResult = await uploadBytes(fileRef, file.value);
        fileUrl = await getDownloadURL(uploadResult.ref);
      }

      // Upload image if provided
      if (imageFile.value) {
        const imagePath = `chats/${chatId}/${Date.now()}_${
          imageFile.value.name
        }`;
        const imageRef = storageRef(storage, imagePath);
        const uploadImageResult = await uploadBytes(imageRef, imageFile.value);
        fileImageUrl = await getDownloadURL(uploadImageResult.ref);
      }

      // Update the chat document
      await setDoc(
        doc(firestore, `chats/${chatId}`),
        {
          participants: {
            [userId]: true,
            [selectedUser.value.userId]: true,
          },
          lastMessage:
            newMessage.value ||
            (fileUrl || fileImageUrl ? "File attachment" : ""),
          sender: userId,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      );

      // Add the message to the Firestore messages collection
      const newMessageDoc = await addDoc(
        collection(firestore, `chats/${chatId}/messages`),
        {
          senderId: userId,
          recipientId: selectedUser.value.userId,
          message: newMessage.value,
          imageUrl: fileImageUrl,
          imageName: imageFile.value ? imageFile.value.name : null,
          fileUrl: fileUrl,
          fileName: file.value ? file.value.name : null,
          timestamp: serverTimestamp(),
        }
      );

      // Update the temporary message in the `messages` array with real data
      messages.value = messages.value.map((msg) =>
        msg.id === tempMessage.id
          ? {
              ...msg,
              id: newMessageDoc.id,
              isSending: false,
              imageUrl: fileImageUrl,
              fileUrl: fileUrl,
            }
          : msg
      );

      // Update cache
      localStorage.setItem(
        `messages_${chatId}`,
        JSON.stringify(messages.value)
      );

      // Reset input fields
      isSendMessageLoading.value = false;
      newMessage.value = "";
      file.value = null;
      imageFile.value = null;
    } catch (error) {
      isSendMessageLoading.value = false;
      console.error("Error sending message:", error);
      messages.value = messages.value.map((msg) =>
        msg.id === tempMessage.id
          ? { ...msg, isSending: false, error: "Failed to send message." }
          : msg
      );
    }
  };

  const latestMessages = ref({});
  const isSender = ref({});
  const unsubscribers = ref([]);
  const timestamp = ref({});
  const newMessageArray = ref(0);

  const filteredUsers = computed(() => {
    return storedUsers.value
      .filter((user) => latestMessages.value[getChatId(userId, user.id)])
      .sort((a, b) => {
        const chatIdA = getChatId(userId, a.id);
        const chatIdB = getChatId(userId, b.id);
        return timestamp.value[chatIdB] - timestamp.value[chatIdA];
      });
  });

  const setupChatListeners = () => {
    // Clear any existing listeners
    unsubscribers.value.forEach((unsub) => unsub());
    unsubscribers.value = [];

    // Set to track unique user IDs with new messages
    const uniqueNewUserIds = new Set();

    storedUsers.value.forEach((user) => {
      const chatId = getChatId(userId, user.id);
      const chatDocRef = doc(firestore, "chats", chatId);

      const unsubscribe = onSnapshot(
        chatDocRef,
        (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            const lastMessage = data.lastMessage || "";
            const sender = data.sender || "";
            const messageTimestamp = data.timestamp || "";

            latestMessages.value[chatId] = lastMessage;
            isSender.value[chatId] = sender;
            timestamp.value[chatId] = messageTimestamp;

            if (lastMessage && sender !== userId) {
              if (!uniqueNewUserIds.has(sender)) {
                uniqueNewUserIds.add(sender);
                newMessageArray.value = uniqueNewUserIds.size;
              }
            } else {
              if (uniqueNewUserIds.has(sender)) {
                uniqueNewUserIds.delete(sender);
                newMessageArray.value = uniqueNewUserIds.size;
              }
            }
          } else {
            latestMessages.value[chatId] = "";
            isSender.value[chatId] = "";
            timestamp.value[chatId] = "";

            const sender = isSender.value[chatId];
            if (uniqueNewUserIds.has(sender)) {
              uniqueNewUserIds.delete(sender);
              newMessageArray.value = uniqueNewUserIds.size;
            }
          }
        },
        (error) => {
          console.error("Error listening to chat updates:", error);
        }
      );

      unsubscribers.value.push(unsubscribe);
    });
  };

  onMounted(() => {
    setupChatListeners();
  });

  onUnmounted(() => {
    unsubscribers.value.forEach((unsub) => unsub());
  });

  const filteredMessages = computed(() =>
    messages.value.filter(
      (m) =>
        (m.senderId === userId &&
          m.recipientId === selectedUser.value.userId) ||
        (m.senderId === selectedUser.value.userId && m.recipientId === userId)
    )
  );

  const loadMessages = () => {
    const chatId = getChatId(userId, selectedUser.value.userId);

    // Check for cached messages
    const cachedMessages = localStorage.getItem(`messages_${chatId}`);
    if (cachedMessages) {
      messages.value = JSON.parse(cachedMessages);
      scrollToBottom();
    }

    isLoading.value = true;

    // Query for messages
    const messagesQuery = query(
      collection(firestore, `chats/${chatId}/messages`),
      orderBy("timestamp", "asc")
    );

    // Real-time updates
    const messageUnsub = onSnapshot(messagesQuery, (snapshot) => {
      const liveMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Update messages
      messages.value = liveMessages;
      isLoading.value = false;

      // Save to cache
      localStorage.setItem(`messages_${chatId}`, JSON.stringify(liveMessages));

      scrollToBottom();
    });

    // Cleanup listener on component unmount
    onUnmounted(() => {
      messageUnsub();
    });
  };

  onMounted(() => {
    loadMessages();
  });

  const scrollToBottom = () => {
    nextTick(() => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
      }
    });
  };

  const Time = (timestamp) => {
    if (timestamp) {
      const date = new Date(timestamp.seconds * 1000);
      const now = new Date();

      const hours = date.getHours() % 12 || 12;
      const minutes = ("0" + date.getMinutes()).slice(-2);
      const period = date.getHours() < 12 ? "am" : "pm";
      const time = `${hours}:${minutes} ${period}`;

      // Check if the message is from today
      if (date.toDateString() === now.toDateString()) {
        return time;
      }

      // Check if the message is from yesterday
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      if (date.toDateString() === yesterday.toDateString()) {
        return `Yesterday ${time}`;
      }

      // For other days, show the day name
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const dayName = days[date.getDay()];

      // If it's within the last week, show the day name
      const lastWeek = new Date(now);
      lastWeek.setDate(lastWeek.getDate() - 7);
      if (date > lastWeek) {
        return `${dayName} ${time}`;
      }

      // For older messages, include the date
      const month = date.toLocaleString("default", { month: "short" });
      const day = date.getDate();
      return `${month} ${day} ${time}`;
    }
    return "";
  };

  return {
    Time,
    getChatId,
    yourChat,
    sendMessage,
    userId,
    newMessage,
    messages,
    isLoading,
    isSendMessageLoading,
    filteredMessages,
    selectedUser,
    timestamp,
    userPhoto,
    userName,
    filteredUsers,
    latestMessages,
    isSender,
    storedUsers,
    newMessageArray,
    file,
    imageFile,
    handleImageUpdate,
    handleFileUpdate,
  };
}
