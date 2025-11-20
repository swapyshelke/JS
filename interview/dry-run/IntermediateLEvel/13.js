// Promise: run tasks sequentially

const tasks = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3)
];

// Output → Promise resolves to [1,2,3]

