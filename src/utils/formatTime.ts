export function formatPrismaDate(prismaDateTime: Date): string {
  const dateObject = new Date(prismaDateTime);

  const dayOfWeek = dateObject.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  return `${dayOfWeek}, ${day} ${month} ${year}`;
}

export function formatTime(dateTimeString: Date): string {
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const postFix = hours >= 12 ? "pm" : "am";
  const formattedHours =
    hours % 12 === 0
      ? 12
      : hours > 12
      ? `0${hours - 12}`
      : hours > 9
      ? hours
      : `0${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${formattedHours}:${formattedMinutes} ${postFix}`;
}
