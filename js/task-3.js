"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("h1 #name-output");

input.addEventListener("input", () => {
  output.textContent =
    input.value.trim().length > 0 ? input.value.trim() : "Anonymous";
});
