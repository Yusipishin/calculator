document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      if (value === "C") {
        clearDisplay();
      } else if (value === "=") {
        calculateResult();
      } else {
        appendToDisplay(value);
      }
    });
  });

  function appendToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }

  function calculateResult() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Ошибка";
    }
  }
});
