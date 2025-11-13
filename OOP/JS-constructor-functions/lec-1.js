
// this is constructor functions
function BankAcount(customerName, balance = 0){
    // properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;


    // this is method / functions
    this.deposit = (amount) => {
        this.balance += amount;
    }

    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}


const accounts = [];

// const accountForm = document.querySelector("#accountrm")
// const customerName = document.querySelector("#cname")
// const balance = document.querySelector('#balance')


// const depositrm = document.querySelector("#depositrm")
// const accountNumber = document.querySelector("#accountNumber")
// const amount = document.querySelector('#amount')

// accountForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const account = new BankAcount(customerName.value, +balance.value)
//     accounts.push(account)
//     console.log(accounts);
// })

// depositrm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const account = accounts.find((account) => account.accountNumber === +accountNumber.value);

//     account.deposit(+amount.value);
//     console.log(accounts);
// })


// making an object and assigning it to swapnilsAccount
const swapnilsAccount = new BankAcount("Swapnil")
// console.log(swapnilsAccount);

// for every object, there is differenet memory space
const sachinsAccount = new BankAcount("Sachin", 20000)
console.log(sachinsAccount.customerName);

// we can change this properties here
// but never do this
console.log(sachinsAccount.accountNumber = 1010101010);
console.log(sachinsAccount.balance = 200);
