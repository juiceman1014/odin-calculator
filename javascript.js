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

const display = document.getElementById("display");
const numVal = document.querySelectorAll(".number");
const operatorVal = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const calculateBtn = document.getElementById("calculate");


let userEquation = {
    num1: null,
    num2: null,
    operator:  null,
}

numVal.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.textContent;

        if(display.textContent === "0"){
            display.textContent = number;
        }else{
            display.textContent += number;
        }
    });
});

