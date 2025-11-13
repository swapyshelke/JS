
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

// const account = new BankAcount("Swapnil", 20000)

const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")

accountForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const account = new BankAcount(customerName.value, balance.value)

    accounts.push(account);
    console.log(accounts);
})




const depositForm = document.querySelector("#depositForm")
const accountNumber = document.querySelector("#accountNumber")
const amount = document.querySelector("#amount")

depositForm.addEventListener('submit', (e) => {
    e.preventDefault()

        const account = accounts.find((acc) => acc.accountNumber === +accountNumber.value);
        if(!account) {
            console.log('acc not found');
            return 
        }

        account.deposit(+amount.value)
        console.log(`💰 Deposited ${amount.value} to ${account.customerName}`);
        console.log("📘 Updated Accounts:", accounts);
        
})