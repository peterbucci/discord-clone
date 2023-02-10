import sameDay from "helpers/same_day";

export default function formatTimestamp(timestamp, onlyTime) {
  // Today's date
  const today = new Date();
  // Input Date
  const date = timestamp.toDate();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let dateString = `${(month < 10 ? "0" : "") + month}/${
    (day < 10 ? "0" : "") + day
  }/${year} `;
  if (onlyTime) {
    dateString = "";
  } else if (sameDay(date, today)) {
    dateString = "Today at ";
  } else if (sameDay(date, today, true)) {
    dateString = "Yesterday at ";
  }
  return `${dateString}${date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}
