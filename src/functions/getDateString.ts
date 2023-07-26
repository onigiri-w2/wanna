export const getJapanDateString = (date: Date) => {
  const dateText = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
  return dateText;
};
