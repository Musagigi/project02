export const reverseDateToDMY = (date: string) => {
  return date.split('-').reverse().join('.');
};
