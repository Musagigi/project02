export const reverseDateToYMD = (date: string) => {
  return date.split('.').reverse().join('-');
};
