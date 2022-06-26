export const isEmpty = (item) => {
  if (item) {
    return true;
  }
  return false;
};

export const compact = (arr) => {
  const result = arr.filter((item) => !!item);
  return result;
};

export const chunk = (array, size, result = []) => {
  if (array.length > 0) {
    const part = array.splice(0, size);
    result.push(part);

    chunk(array, size, result);
  }
  return result;
};

export const difference = (checkArr, values) => {
  const result = [];
  for (let item in checkArr) {
    const itemCheck = checkArr[item];
    if (!values.includes(itemCheck)) {
      result.push(itemCheck);
    }
  }
  return result;
};
