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

export function ChatFuntions() {
  const auth = getAuth();
  const user = ref(auth.currentUser);
  const { firestore } = useAuth();
  const userId = user.value.uid;
  const userPhoto = user.value.photoURL;
  const userName = user.value.displayName;
  const route = useRouter();
  const { storedUsers } = getUsers();
  const newMessage = ref("");
  const messages = ref([]);
  const isLoading = ref(false);
  const isSendMessageLoading = ref(false);
  const messageContainer = ref(null);
  let selectedUser = ref({});

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

  const sendMessage = async () => {
    if (newMessage.value.trim() === "") return;
    isSendMessageLoading.value = true;
    try {
      const chatId = getChatId(userId, selectedUser.value.userId);

      // create room
      await setDoc(
        doc(firestore, `chats/${chatId}`),
        {
          participants: {
            [userId]: true,
            [selectedUser.value.userId]: true,
          },
          lastMessage: newMessage.value,
          sender: userId,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      );

      // then add the message

      await addDoc(collection(firestore, `chats/${chatId}/messages`), {
        senderId: userId,
        recipientId: selectedUser.value.userId,
        message: newMessage.value,
        timestamp: serverTimestamp(),
      });

      // set loading to false

      isSendMessageLoading.value = false;
    } catch (error) {
      console.error("Error sending message: ", error);
    }
    newMessage.value = "";
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

  watch(newMessageArray, (newVal) => {
    console.log(newMessageArray.value);
  });

  const filteredMessages = computed(() =>
    messages.value.filter(
      (m) =>
        (m.senderId === userId &&
          m.recipientId === selectedUser.value.userId) ||
        (m.senderId === selectedUser.value.userId && m.recipientId === userId)
    )
  );
  //console.log(messages);

  const scrollToBottom = () => {
    nextTick(() => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
      }
    });
  };

  const loadMessages = () => {
    isLoading.value = true;
    const chatId = getChatId(userId, selectedUser.value.userId);

    // Query for messages
    const messagesQuery = query(
      collection(firestore, `chats/${chatId}/messages`),
      orderBy("timestamp", "asc")
    );

    const messageUnsub = onSnapshot(messagesQuery, (snapshot) => {
      messages.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      isLoading.value = false;
      scrollToBottom();
    });

    onUnmounted(() => {
      messageUnsub();
    });
  };
  onMounted(() => {
    loadMessages();
  });

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
  };
}
