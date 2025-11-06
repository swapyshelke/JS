// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as'
// let pos = -1

// while((pos = str.indexOf(target, pos + 1)) != -1) {
//     console.log(pos);
    
// }


// let str = ""

// for(let i = 65 ; i <= 90 ; i++){
//     str += String.fromCodePoint(i)
// }

// console.log(str);


// function ucfirst(str) {
//     return str[0].toUpperCase() + str.slice(1)
// }

// console.log(ucfirst("john"));


// function ucfirst(str){
//     if(!str) return str;

//     return str[0].toUpperCase() + str.slice(1)
// }

// console.log(ucfirst('swapnil'));


function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    if(lowerStr.includes('viagra') || lowerStr.includes("xxx")) {
        
        // console.log(lowerStr.includes('viagra'));
        return true
        
    } else {
        return false
    }
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));














// console.log('string practise');

// '' - string
// "" - string
// `` - string primitive, no method access

// const str1 = `hello there`
// const str2 = new String("A String Object")

// console.log(str2);

// console.log(str1.endsWith('e'));


// const str = "swapnil shelek"
// console.log(str.length);


// let str = "Hii"
// str[0] = 'h'
// console.log(str[0]);




// for(let char of "hello"){
//     console.log(char);
    
// }

// console.log(str.at(-2));


// console.log(str.slice(-5));
// console.log(str.substring(-10));



// console.log(str.indexOf('boy', 5));


// console.log(str.indexOf('b'));
// console.log(str.lastIndexOf('boy'));



// case sensitive
// console.log(str.indexOf("S"));
// console.log(str.lastIndexOf("I"));


// console.log(str.lastIndexOf(''));
// console.log(str.length);


// console.log(str.indexOf('w'));
// console.log(str.lastIndexOf('s'));



// console.log(str.charAt(str.length - 1 + 1 - 3));


// console.log(str.charAt());


// console.log(str[str.length - 1]);


// for(let i = 0 ; i < str.length; i++){
// console.log(str[i]);
// }


// let str = 'Hi'

// console.log(str.toLocaleLowerCase());
// console.log(str.toUpperCase());


// str = 'h' + str[1]
// console.log(str);


// console.log('swapnil'[0].toLocaleUpperCase());





// let pos = 0

// while(true){
//     let foundPos = str.indexOf(target, pos);
//     if(foundPos == -1) break;
//     console.log(`found at ${foundPos}`);
//     pos = foundPos + 1;   
// }
