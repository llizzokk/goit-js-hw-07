"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

btn.addEventListener("click", handleClick);

function handleClick() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
