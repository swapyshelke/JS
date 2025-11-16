const arr = [10, 45, 34, 12, 55]

arr.reduce((acc, curr, index) => {
    console.log("loop : ", index);
    console.log(" acc : ", acc);
    console.log("  curr: ", curr);

    return acc + curr;
}, 0)


/*

Param	Meaning
acc	    The accumulated value so far
curr	Current element of array
index	Current index
arr	    Original array

*/

/*

loop :  0
 acc :  0
  curr:  10
loop :  1
 acc :  10
  curr:  45
loop :  2
 acc :  55
  curr:  34
loop :  3
 acc :  89
  curr:  12
loop :  4
 acc :  101
  curr:  55


*/