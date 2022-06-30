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

export const flatten = (array, result = []) => {
  for (let item in array) {
    if (Array.isArray(array[item])) {
      flatten(array[item], result);
    } else {
      result.push(array[item]);
    }
  }
  return result;
};
export const fromPairs = (array) => {
  // return Object.fromEntries(array);
  let result = {};
  for (let i in array) {
    let item = array[i];
    result[item[0]] = item[1];
  }
  return result;
};
