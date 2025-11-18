// WAP in JS to get current date

const formatData = (date = new Date()) => {
    const days = date.getDay();
    const month = date.getMonth();
    const years = date.getFullYear()

    return `${days} / ${month} / ${years}`
} 

console.log(formatData());
