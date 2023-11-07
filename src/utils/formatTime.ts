export function formatPrismaDate(prismaDateTime: Date): string {
  const dateObject = new Date(prismaDateTime);

  const dayOfWeek = dateObject.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  return `${dayOfWeek}, ${day} ${month}, ${year}`;
}

export function formatTime(dateTimeString: Date): string {
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const postFix = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${formattedHours}:${formattedMinutes} ${postFix}`;
}
