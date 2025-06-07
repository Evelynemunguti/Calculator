const display = document.getElementById("display");
const buttons = document.querySelectorAll("button"); // Fix: use correct variable name and selector

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value"); // Fix: use button.getAttribute, not getAttribute alone

    if (value === "C") {
      currentInput = '';
    } else if (value === "X") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      currentInput = calculate(currentInput);
    } else {
      currentInput += value;
    }

    display.textContent = currentInput; // you're using a <div>, so textContent is correct
    display.style.color = "black";
  });
});

function calculate(expression) {
  try {
    const result = Function('"use strict"; return (' + expression + ')')();
    return result.toString();
  } catch {
    return "Error";
  }
}

