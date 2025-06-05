export function parseDateFromString(dateStr: string): Date {
  const [day, month, year] = dateStr.split("/");
  return new Date(+year, +month - 1, +day);
}
