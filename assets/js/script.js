import B2D from "./modules/B2D.js";

const input = document.getElementById("input");

const output = document.getElementById("output");

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  input.value = "";

  output.value = "";

  clear.setAttribute("disabled", "true");
});

input.addEventListener("input", () => {
  let value = input.value;

  if (value.length === 0) {
    input.value = "";
    output.value = "";
    clear.setAttribute("disabled", "true");
  }

  if (value.length > 0) {
    clear.removeAttribute("disabled");
  }

  if (!value.match(/^[01]+$/) && value.length > 0) {
    input.value = input.value.substring(0, value.length - 1);
  }

  output.value = B2D.convert(input.value);
});
