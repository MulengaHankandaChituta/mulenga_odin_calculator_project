document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".buttons button");
  let currentInput = "";
  let firstNumber = "";
  let operator = "";
  let secondNumber = "";

  function evaluatePair() {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        if (parseFloat(secondNumber) === 0) {
          throw new Error("You can't divide by zero! Nice try though.");
        }
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }
    // Round the result to 4 decimal places
    return Math.round(result * 10000) / 10000;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.textContent;

      if (value === "=") {
        try {
          if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
            const result = evaluatePair();
            display.value = result;
            firstNumber = result;
            secondNumber = "";
            operator = "";
          }
        } catch (error) {
          display.value = error.message;
          currentInput = "";
          firstNumber = "";
          operator = "";
          secondNumber = "";
        }
      } else if (value === "c") {
        display.value = "";
        currentInput = "";
        firstNumber = "";
        operator = "";
        secondNumber = "";
      } else if ("+-*/".includes(value)) {
        if (operator === "") {
          operator = value;
        } else {
          try {
            const result = evaluatePair();
            display.value = result;
            firstNumber = result;
            secondNumber = "";
            operator = value;
          } catch (error) {
            display.value = error.message;
            currentInput = "";
            firstNumber = "";
            operator = "";
            secondNumber = "";
          }
        }
      } else {
        if (operator === "") {
          firstNumber += value;
          display.value = firstNumber;
        } else {
          secondNumber += value;
          display.value = secondNumber;
        }
      }
    });
  });
});
