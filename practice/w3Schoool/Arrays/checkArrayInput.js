// ===== first way to check is input is array

/*

function checkArray(array) {
  if (Array.isArray(array)) {
    return true
    } else
      return false
}

const arr = [1, 2, 3, 4, 5];

const res = checkArray(arr);
console.log(res);

*/

// ===== 2nd way ============


/*
var is_array = function (input) {
  if (toString.call(input) === "[Object Array]") return true;

  return false;
};

console.log(is_array("w3resources"));

console.log(is_array([1, 2, 3, 4]));

*/

// ============

// const is_array = (input) => {
//   if (toString.call(input) === ["object Array"]) {
//     return true;
//   }

//   return false;
// };

// console.log(is_array("w3res"));
// console.log(is_array([1, 2, 3]));


const is_array = function (input) {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));