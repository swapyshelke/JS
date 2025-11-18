/*

WAP in JS to create a new string adding "New!" in front of string.
If the given string begins with "New!" already then return the original
string

*/

const addNew = (str) => str.indexOf('New!') === 0 ? str : `New ${str}`;

console.log(addNew('New! Offers'));

