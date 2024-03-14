function BankAcount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = (amount) => {
        this.balance += amount;
    }

    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}


const accounts = [];

const accountForm = document.querySelector("#accountrm")
const customerName = document.querySelector("#cname")
const balance = document.querySelector('#balance')


const depositrm = document.querySelector("#depositrm")
const accountNumber = document.querySelector("#accountNumber")
const amount = document.querySelector('#amount')

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAcount(customerName.value, +balance.value)
    accounts.push(account)
    console.log(accounts);
})

depositrm.addEventListener("submit", (e) => {
    e.preventDefault();
    const account = accounts.find((account) => account.accountNumber === +accountNumber.value);

    account.deposit(+amount.value);
    console.log(accounts);
})



// const swapnilsAccount = new BankAcount("Swapnil", 2000)

// swapnilsAccount.deposit(2000)
// swapnilsAccount.withdraw(500)
// console.log(swapnilsAccount);