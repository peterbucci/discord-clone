export default function sameDay(dateOne, dateTwo, yesterday) {
  return (
    dateOne.getDate() === dateTwo.getDate() - (yesterday ? 1 : 0) &&
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
  );
}
