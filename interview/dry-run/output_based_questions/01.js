console.log(1);
// 1st this will execute


setTimeout(() => {
    console.log(2);
}, 1000)
// this will get execute, but waits for one second


setTimeout(() => {
    console.log(3);
}, 0)
// waits for none, but async, thats why runs after 4
// but before 2


console.log(4);
// 

