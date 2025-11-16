const arrOfNums = [1,1,  2, 3, 4, 4, 5, 6, 7, 7];

const ele = arrOfNums.filter(
    (ele, index, arr) =>{
        // console.log("ele", ele, "index:", index, "arr : ", arr);
        return arr.indexOf(ele) !== index;
    });

    console.log(ele);
    

/*
ele 1 index: 0 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
ele 1 index: 1 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
ele 2 index: 2 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
ele 3 index: 3 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
ele 4 index: 4 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
ele 4 index: 5 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
ele 5 index: 6 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
ele 6 index: 7 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
ele 7 index: 8 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
ele 7 index: 9 arr :  [
  1, 1, 2, 3, 4,
  4, 5, 6, 7, 7
]
*/