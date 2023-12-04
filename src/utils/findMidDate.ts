export const findMidDate = (startDateStr: string, endDateStr: string) => {
  const formatDate = (dateStr: string) => {
    return `20${dateStr.substring(0, 2)}-${dateStr.substring(2, 4)}-${dateStr.substring(4)}`;
  };

  const start = new Date(formatDate(startDateStr));
  const end = new Date(formatDate(endDateStr));
  const difference = end.getTime() - start.getTime();
  const midTime = start.getTime() + difference / 2;
  const midDate = new Date(midTime);
  const formattedMidDate = midDate.toISOString().split("T")[0].replace(/-/g, "").substring(2);
  return formattedMidDate;
};
