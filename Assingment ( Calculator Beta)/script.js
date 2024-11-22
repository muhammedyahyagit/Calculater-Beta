
function simpleCalculator() {
    var firstNumber = prompt("Enter the first number:");
    firstNumber = parseFloat(firstNumber);

    var secondNumber = prompt("Enter the second number:");
    secondNumber = parseFloat(secondNumber);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Invalid input! Please enter numeric values.");
        return;
    }

    var operator = prompt("Enter an operator (+, -, *, /):");
    var result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } 
    else if (operator === "-") {
        result = firstNumber - secondNumber;
    } 
    else if (operator === "*") {
        result = firstNumber * secondNumber;
    } 
    else if (operator === "/") {
        if (secondNumber === 0) {
            alert("Error! Division by zero is not allowed.");
            return;
        }
        result = firstNumber / secondNumber;
    } 
    else {
        alert("Invalid operator! Please enter one of +, -, *, /.");
        return;
    }

    alert(`Result: ${result}`);
}

simpleCalculator();