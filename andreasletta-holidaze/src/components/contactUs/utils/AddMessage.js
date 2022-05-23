import { BASE_URL } from "../../../constants/api";
import axios from "axios";
//const username = getUsername();

export default function AddMessage(event) {
  event.preventDefault();

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
    formNameMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid email</p></div>`;
  } else {
    formNameMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter your name</p></div>`;
  }

  if (checkLength(formEmail.value, 0)) {
    formEmailMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid email</p></div>`;
  } else {
    formEmailMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter your email</p></div>`;
  }

  if (validateEmail(formEmail.value)) {
    formEmailMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid email</p></div>`;
  } else {
    formEmailMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter your email</p></div>`;
  }

  if (checkLength(formSubject.value, 0)) {
    formSubjectMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid subject</p></div>`;
  } else {
    formSubjectMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter your subject</p></div>`;
  }

  if (checkLength(formMessage.value, 0)) {
    formMessageMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid message</p></div>`;
  } else {
    formMessageMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter your message</p></div>`;
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
          subject: `${subjectValue}`,
          message: `${messageValue}`,
        },
      })
      .then(response => {
        addMessageContainer.innerHTML = `<p>Message sent!</p>`;

        function reload() {
          setTimeout(function () {
            window.location.reload(false);
          }, 1500);
        }
        reload();
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
