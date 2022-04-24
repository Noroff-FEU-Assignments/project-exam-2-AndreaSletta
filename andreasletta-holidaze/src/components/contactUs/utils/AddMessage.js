import { BASE_URL } from "../../../constants/api";
import axios from "axios";
//const username = getUsername();

export default function AddMessage(event) {
  event.preventDefault();

  const accommodationName = document.querySelector("h1").innerText;
  const addMessageContainer = document.querySelector("#addMessageContainer");
  const formName = document.querySelector("#formName");
  const formNameMessage = document.querySelector("#formNameMessage");
  const formEmail = document.querySelector("#formEmail");
  const formEmailMessage = document.querySelector("#formEmailMessage");
  const formSubject = document.querySelector("#formSubject");
  const formSubjectMessage = document.querySelector("#formSubjectMessage");
  const formMessage = document.querySelector("#formMessage");
  const formMessageMessage = document.querySelector("#formMessageMessage");

  const nameValue = formName.value.trim();
  const emailValue = formEmail.value.trim();
  const subjectValue = formSubject.value.trim();
  const messageValue = formMessage.value.trim();

  //validate form and display errors

  if (checkLength(formName.value, 0)) {
    formNameMessage.innerHTML = "Valid name";
  } else {
    formNameMessage.innerHTML = "Please enter your name";
  }

  if (checkLength(formEmail.value, 0)) {
    formEmailMessage.innerHTML = "Valid name";
  } else {
    formEmailMessage.innerHTML = "Please enter your name";
  }

  if (validateEmail(formEmail.value)) {
    formEmailMessage.innerHTML = "Valid name";
  } else {
    formEmailMessage.innerHTML = "Please enter your name";
  }

  if (checkLength(formSubject.value, 0)) {
    formSubjectMessage.innerHTML = "Valid name";
  } else {
    formSubjectMessage.innerHTML = "Please enter your name";
  }

  if (checkLength(formMessage.value, 0)) {
    formMessageMessage.innerHTML = "Valid name";
  } else {
    formMessageMessage.innerHTML = "Please enter your name";
  }

  //If form vaild, send
  if (
    checkLength(formName.value, 0) &&
    checkLength(formSubject.value, 0) &&
    checkLength(formEmail.value, 0) &&
    validateEmail(formEmail.value) &&
    checkLength(formMessage.value, 0)
  ) {
    axios
      .post(`${BASE_URL}messages`, {
        data: {
          name: `${nameValue}`,
          email: `${emailValue}`,
          subject: `${accommodationName}: ${subjectValue}`,
          message: `${messageValue}`,
        },
      })
      .then(response => {
        console.log(response);

        function successMessage() {
          setInterval(function successMessage() {
            addMessageContainer.innerHTML = "Message sent";
          }, 2000);
        }
        successMessage();
      });
  }

  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }
}
