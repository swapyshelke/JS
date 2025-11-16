Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator;
  let startIndex;

  // If initialValue is given
  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    // If no initialValue → use first element as accumulator
    accumulator = this[0];
    startIndex = 1;
  }

  // Loop through array
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};
