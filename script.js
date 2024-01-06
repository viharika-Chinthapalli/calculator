document.addEventListener("DOMContentLoaded", function () {
  const resultDisplay = document.querySelector(".result");
  const keys = document.querySelector(".keys");

  resultDisplay.textContent = "0";

  keys.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
      const button = e.target;
      const action = button.textContent;

      if (action === "DEL") {
        resultDisplay.textContent =
          resultDisplay.textContent.length > 1
            ? resultDisplay.textContent.slice(0, -1)
            : "0";
      } else if (action === "RESET") {
        resultDisplay.textContent = "0";
      } else if (action === "=") {
        try {
          let result = Number(
            eval(resultDisplay.textContent.replace(/x/g, "*"))
          );
          resultDisplay.textContent = result.toFixed(3).replace(/\.?0+$/, "");
        } catch (error) {
          resultDisplay.textContent = "Error";
        }
      } else {
        if (resultDisplay.textContent === "0") {
          resultDisplay.textContent = action;
        } else {
          resultDisplay.textContent += action;
        }
      }
    }
  });
});
