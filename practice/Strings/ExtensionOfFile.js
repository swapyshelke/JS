// WAP to get the extension of the file name


const getfileExtension = (str) => str.slice(str.lastIndexOf("."))

console.log(getfileExtension("index.html"));
console.log(getfileExtension("index.config.ks"));
