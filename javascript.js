function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    let difference = num1 - num2;
    return difference;
}

function multiply(num1, num2){
    let product = num1 * num2;
    return product;
}

function divide(num1, num2){
    let quotient = num1/num2;
    return quotient;
}

// let num1 = parseFloat(prompt("What's the first number?"));
// console.log(num1);
// let num2 = parseFloat(prompt("What's the second number?"));
// console.log(num2);
// let operator = prompt("What's the operator?");

let equation = {
    num1: num1,
    num2: num2,
    operator:  operator,
}

function operate(num1, num2, operator){
    if(operator == "add"){
        return add(num1,num2)
    }else if (operator == "subtract"){
        return subtract(num1,num2)
    }else if (operator == "multiply"){
        return multiply(num1,num2)
    }else if (operator == "divide"){
        return divide(num1,num2)
    }else{
        return "ERROR"
    }
}

