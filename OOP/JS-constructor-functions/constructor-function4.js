
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


// array to store accounts details
const accounts = []

const account = new BankAcount("Swapnil", 20000)

const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")

accountForm.addEventListener("submit", (e) => {

    e.preventDefault();

    accounts.push(account)
    console.log(accounts);
})


// ========== deposit form 
const depositForm = document.querySelector("#depositForm")
const accountNumber = document.querySelector("#accountNumber")
const amount = document.querySelector("#amount")


depositForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(account.accountNumber, account.amount);
    
})

