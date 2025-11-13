
function BankAcount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;


    // this is method / functions
    this.deposit = (amount) => {
        this.balance += amount;
    }


    // this is not optimised way to make methods inside constructor function
    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}

const swapnilsAccount = new BankAcount("Swapnil", 20000)

// calling methods of an object
swapnilsAccount.deposit(200000)

console.log(swapnilsAccount.balance);

