
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

const swapnilsAccount = new BankAcount("Swapnil", 20000)

// DOM
const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")

accountForm.addEventListener("submit", (e) => {

    // prevent page reload
    e.preventDefault();

    // get values 
    console.log(customerName.value, +balance.value);
    
})


