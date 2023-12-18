class BankAccount {
    constructor(accountHolder, accountNumber, balance) {
      this.accountHolder = accountHolder;
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      // this.balance -= amount;
        if(amount <= 0){
        this.balance -= amount;
          console.log(`Withdrawn ${amount} from account. New balance: ${this.balance}`);
          return 
        }
        //  console.log(`Insufficient funds. Cannot withdraw ${amount}. Current balance: ${this.balance}`);
      
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  // Example usage
  const myAccount = new BankAccount("John Doe", "123456789", 300);
  
  console.log(`Account holder: ${myAccount.accountHolder}`);
  console.log(`Account number: ${myAccount.accountNumber}`);
  console.log(`Initial balance: ${myAccount.getBalance()}`);
  
  myAccount.deposit(500);
  console.log(`Current balance: ${myAccount.getBalance()}`);
  myAccount.withdraw(200);
  console.log(`Current balance: ${myAccount.getBalance()}`);
  myAccount.withdraw(800); 
  console.log(`Current balance: ${myAccount.getBalance()}`);
  
  console.log(`Final balance: ${myAccount.getBalance()}`);