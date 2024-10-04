"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  if (
    elements.email.value.length === 0 ||
    elements.password.value.length === 0
  ) {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      email: elements.email.value.trim(),
      password: elements.password.value.trim(),
    };

    console.log(obj);
    event.target.reset();
  }
}
