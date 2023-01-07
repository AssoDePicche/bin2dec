import AttributeToggle from "./modules/AttributeToggle.js";
import B2D from "./modules/B2D.js";

const input = document.getElementById("binary");

const output = document.getElementById("output");

const b2d = document.getElementById("b2d");

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  input.value = "";
  output.value = "";
  AttributeToggle.disable(b2d);
  AttributeToggle.disable(clear);
});

input.addEventListener("input", () => {
  let value = input.value;

  if (value.length > 0) {
    b2d.removeAttribute("disabled");

    clear.removeAttribute("disabled");
  }

  if (!value.match(/^[01]+$/)) {
    alert("Type neither 0 or 1");
    input.value = "";
    AttributeToggle.disable(b2d);
    AttributeToggle.disable(clear);
  }
});

b2d.addEventListener("click", () => {
  output.value = B2D.convert(input.value);
});
