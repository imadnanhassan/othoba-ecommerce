export const formatDate = (day: string | number | Date, config: unknown) => {
  const defaultOption = { day: "numeric", month: "short", year: "numeric" };
  const options = config ? config : defaultOption;
  return new Date(day).toLocaleDateString("en-us", options);
};
