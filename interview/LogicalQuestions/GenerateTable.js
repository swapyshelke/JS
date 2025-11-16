const genTable = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(i * num);
  }
};

console.log(genTable(2));


// After finishing, the function has no return statement,
// so JavaScript automatically returns undefined.

// Then your outer console.log()
// prints that returned value, so you see:
// undefined




