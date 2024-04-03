#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 40000; // doller
let myPin = 4321;

console.log("welcome to qadeers ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
    name: "pin",
    message: "enter your pin",
    type: "number",
    }
]);

if (pinAnswer.pin === myPin) {
   console.log("login successfully Current Pin Code");
   console.log(`your current balance is ${myBalance}`);

   let operationAns = await inquirer.prompt(
   [
    {
        name: "operation",
        message: "plese select operation",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"]
    }
   ]
   )

   if(operationAns.operation === "withdraw"){
    let amountAns =await inquirer.prompt([
        {
            name: "amount",
            message: "enter the ammount to withdraw",
            type: "number",
        }
    ]) 
    if (amountAns.ammount <= myBalance) {
        myBalance -= amountAns.account
        console.log(`Your remaing balance is ${myBalance}`);   
    } else if (amountAns.account > myBalance) {
        console.log(`Unable to transit \n your account balane is ${myBalance}`);
        
    }
} 


else if (operationAns.operation === "check balance") {
console.log(`your account balance is: ${myBalance}`);
} else if (operationAns.operation === "fast cash") {
    let fast = await inquirer.prompt ([{
        name: "cash",
        type: "rawlist",
        message: "choose your amount",
        choices: ["1000", "2000", "5000", "10000"]
    }])
    myBalance -= fast.cash
    console.log(`Your remaning balance is ${myBalance}`);
    
}

} 


else if (pinAnswer.pin !== myPin) {
    console.log("Incorrect PIN Please try again")
    
}