export default function FormatTime(timestamp) {
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
}
