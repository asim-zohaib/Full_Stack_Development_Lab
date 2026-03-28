function calculate() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let resultBox = document.getElementById("resultBox");

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        resultBox.innerHTML = "Please enter valid numbers!";
        resultBox.style.backgroundColor = "yellow";
        return;
    }

    let result;

    if (operation === "add") {
        result = num1 + num2;
    } 
    else if (operation === "subtract") {
        result = num1 - num2;
    } 
    else if (operation === "multiply") {
        result = num1 * num2;
    } 
    else if (operation === "divide") {

        if (num2 === 0) {
            resultBox.innerHTML = "Error: Cannot divide by zero!";
            resultBox.style.backgroundColor = "red";
            return;
        }

        result = num1 / num2;
    }

    resultBox.innerHTML = "Result = " + result;

    // Bonus: Change background color
    if (result > 0) {
        resultBox.style.backgroundColor = "lightgreen";
    } 
    else if (result < 0) {
        resultBox.style.backgroundColor = "lightcoral";
    } 
    else {
        resultBox.style.backgroundColor = "lightgray";
    }
}

function resetCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultBox").innerHTML = "";
    document.getElementById("resultBox").style.backgroundColor = "transparent";
}
