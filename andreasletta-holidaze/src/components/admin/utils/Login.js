import { saveToken, saveUser, getUsername } from "./Storage";
import { BASE_URL } from "../../../constants/api";
import Admin from "../Admin";
import React from "react";
import { Redirect } from "react-router-dom";

export default function login(event) {
  const email = document.querySelector("#inputEmail");

  const password = document.querySelector("#inputPassword");

  const loginMessage = document.querySelector("#loginMessage");

  event.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  doLogin(emailValue, passwordValue, loginMessage);
}

async function doLogin(email, password, loginMessage) {
  const url = BASE_URL + "auth/local";

  const data = JSON.stringify({ identifier: email, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      const currentUsername = getUsername();
      console.log("welcome", currentUsername);
      loginMessage.innerHTML =
        "<i className='fas fa-spinner fa-pulse text-body'></i>";

      function reload() {
        setTimeout(function () {
          window.location.reload(false);
        }, 3000);
      }
      reload();
    }

    if (json.error) {
      loginMessage.innerHTML = `<i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
        <p> Wrong email or password</p>`;
    }
  } catch (error) {
    console.log(error);
  }
}
