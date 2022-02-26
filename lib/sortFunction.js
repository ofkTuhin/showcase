export const sortByFrequency = (array) => {
  let frequency = {};
  let sortAble = [];
  let newArr = [];

  array.map((value) => {
    if (value in frequency) frequency[value] = frequency[value] + 1;
    else frequency[value] = 1;
  });

  for (let key in frequency) {
    sortAble.push([key, frequency[key]]);
  }

  sortAble.sort((a, b) => {
    return b[1] - a[1];
  });

  sortAble.map((obj) => {
    for (let i = 0; i < obj[1]; i++) {
      newArr.push(obj[0]);
    }
  });
  return newArr;
};
