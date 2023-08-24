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
            userEquation.operator = button.getAttribute("data-value");
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
        num1: "",
        num2: "",
        operator: "",
    };
    display.textContent = "0";
}

deleteBtn.addEventListener("click", () => {
    if(userEquation.operator === ""){
        userEquation.num1 = userEquation.num1.slice(0, -1);
        display.textContent = userEquation.num1 || "0";
    }else{
        userEquation.num2 = userEquation.num2.slice(0,-1);
        display.textContent = userEquation.num2 || "0";
    }
});

calculateBtn.addEventListener("click", () => {
    if(userEquation.num1 !== "" && userEquation.num2 !== "" && userEquation.operator != ""){
        userEquation.num1 = calculateEquation(userEquation.num1, userEquation.num2, userEquation.operator);
        userEquation.num2 = "";
        userEquation.operator="";
        display.textContent = userEquation.num1;
    }

});

function calculateEquation(num1, num2, operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    let answer; 

    switch(operator){
        case "+":
            answer = add(num1,num2);
            answer = answer.toFixed(2);
            return answer;
        case "-":
            answer = subtract(num1,num2);
            answer = answer.toFixed(2);
            return answer;
        case "x":
            answer = multiply(num1,num2);
            answer = answer.toFixed(2);
            return answer;
        case "÷":
            answer = divide(num1,num2);
            answer = answer.toFixed(2);
            return answer;
    }

}