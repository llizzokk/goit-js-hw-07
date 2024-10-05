"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(".input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let size = 30;

create.addEventListener("click", handleCreate);

function handleCreate() {
  if (input.value < 1 || input.value > 100) {
    return;
  }
  createBoxes(input.value);
}

function createBoxes(amount) {
  clear();
  let html = "";
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    html += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
  }
  boxes.innerHTML = html;
}

function clear() {
  boxes.innerHTML = "";
  input.value = "";
  size = 30;
}

destroy.addEventListener("click", handleDestroy);

function handleDestroy() {
  clear();
}
