const getTable = (num) => {
  const arr = [];

  for (let i = 1; i <= 10; i++) {
    arr.push(i * num);
  }
  return arr;
};

console.log(getTable(2));
