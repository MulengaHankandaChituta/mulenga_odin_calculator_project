document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".buttons button");
  let currentInput = "";
  let firstNumber = "";
  let operator = "";
  let secondNumber = "";

  function evaluatePair() {
    if (operator === "+") {
      return parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operator === "-") {
      return parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operator === "*") {
      return parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (operator === "/") {
      return parseFloat(firstNumber) / parseFloat(secondNumber);
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.textContent;

      if (value === "=") {
        if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
          const result = evaluatePair();
          display.value = result;
          // Reset variables for next pair calculation
          firstNumber = result;
          secondNumber = "";
          operator = "";
        }
      } else if (value === "c") {
        display.value = "";
        // Reset all variables
        currentInput = "";
        firstNumber = "";
        operator = "";
        secondNumber = "";
      } else if ("+-*/".includes(value)) {
        if (operator === "") {
          operator = value;
        } else {
          const result = evaluatePair();
          display.value = result;
          // Set result as first number for next pair calculation
          firstNumber = result;
          secondNumber = "";
          operator = value;
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
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".buttons button");
  let currentInput = "";
  let firstNumber = "";
  let operator = "";
  let secondNumber = "";

  function evaluatePair() {
    if (operator === "+") {
      return parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operator === "-") {
      return parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operator === "*") {
      return parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (operator === "/") {
      return parseFloat(firstNumber) / parseFloat(secondNumber);
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.textContent;

      if (value === "=") {
        if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
          const result = evaluatePair();
          display.value = result;
          // Reset variables for next pair calculation
          firstNumber = result;
          secondNumber = "";
          operator = "";
        }
      } else if (value === "c") {
        display.value = "";
        // Reset all variables
        currentInput = "";
        firstNumber = "";
        operator = "";
        secondNumber = "";
      } else if ("+-*/".includes(value)) {
        if (operator === "") {
          operator = value;
        } else {
          const result = evaluatePair();
          display.value = result;
          // Set result as first number for next pair calculation
          firstNumber = result;
          secondNumber = "";
          operator = value;
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
