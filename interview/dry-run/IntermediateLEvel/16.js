// Build your own pipe()

const add = x => x + 1;
const double = x => x * 2;

pipe(add, double)(5);  
// Output → 12
