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

const display = document.getElementById("display");
const numBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const calculateBtn = document.getElementById("calculate");


let userEquation = {
    num1: "",
    num2: "",
    operator:  "",
}

numBtn.forEach(button => {
    button.addEventListener("click", () => {
    if(userEquation.operator === ""){
        userEquation.num1 += button.getAttribute("data-value");
        display.textContent = userEquation.num1;
    }else{
        userEquation.num2 += button.getAttribute("data-value");
        display.textContent = userEquation.num2;
    }
    });
});

operatorBtn.forEach(button => {
    button.addEventListener("click", ()=> {
        if(userEquation.num1 !== "" && userEquation.num2 !== "" && userEquation.operator !== ""){
            userEquation.num1 = calculateEquation(userEquation.num1, userEquation.num2, userEquation.operator);
            userEquation.num2 = "";
            userEquation.operator = button.getAttribute("data.value");
            display.textContent = userEquation.num1;
        }else if(userEquation.num1 !== "" && userEquation.num2 ===""){
            userEquation.operator = button.getAttribute("data-value");
        }
    });
});

clearBtn.addEventListener("click", () => {
    clearCurrentEquation();
})

function clearCurrentEquation(){
    userEquation = {
        num1: null,
        num2: null,
        operator: null,
    };
    display.textContent = "0";
}

deleteBtn.addEventListener("click", () => {
    if(userEquation.operator === null){
        userEquation.num1 = userEquation.num1.slice(0, -1) || null;
        display.textContent = userEquation.num1 || "0";
    }else{
        userEquation.num2 = userEquation.num2.slice(0,-1) || null;
        display.textContent = userEquation.num2 || "0";
    }
});

calculateBtn.addEventListener("click", () => {
    if(userEquation.num1 !== null && userEquation.num2 !== null && userEquation.operator !== null) {
        calculateEquation();
    }

});

function calculateEquation(){
    const num1 = parseFloat(userEquation.num1);
    const num2 = parseFloat(userEquation.num2);
    const operator = userEquation.operator;
    let answer; 

    switch(operator){
        case "+":
            answer = add(num1,num2);
            display.textContent = answer;
            break;
        case "-":
            answer = subtract(num1,num2);
            display.textContent = answer;
            break;
        case "x":
            answer = multiply(num1,num2);
            display.textContent = answer;
            break;
        case "÷":
            answer = divide(num1,num2);
            display.textContent = answer;
            break;

    }


    //try switch statements

    // if(operator == "+"){
    //     answer = add(num1,num2);
    //     display.textContent = answer;
        
    // }else if (operator == "-"){
    //     answer = subtract(num1,num2);
    //     display.textContent = answer;
        
    // }else if (operator == "x"){
    //     answer = multiply(num1,num2);
    //     display.textContent = answer;
    //     b
    // }else if (operator == "÷"){
    //     answer = divide(num1,num2);
    //     display.textContent = answer;
        
    // }else{
    //     answer = "ERROR";
    // }

    

    userEquation.num1 = answer;
    userEquation.num2 = null;
    userEquation.operator = null;

}