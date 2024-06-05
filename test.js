// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero is not allowed";
    }
    return num1 / num2;
}

// Function to calculate the result based on operator
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Error: Invalid operator";
    }
}

// Example usage
const num1 = 10;
const operator = "+";
const num2 = 5;
const result = calculate(num1, operator, num2);
console.log(`Result: ${result}`);