import { saveToken, saveUser, getUsername } from "./Storage";
import { BASE_URL } from "../../../constants/api";
import Admin from "../Admin";

const username = getUsername();

export default function login(event) {
  const email = document.querySelector("#inputEmail");

  const password = document.querySelector("#inputPassword");

  event.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  doLogin(emailValue, passwordValue);
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

async function doLogin(email, password) {
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
    console.log(json);
    if (json.user) {
      console.log(json.user.username);

      saveToken(json.jwt);
      saveUser(json.user);

      const currentUsername = getUsername();
      console.log("welcome");
      // delay then Admin()
    }

    if (json.error) {
      console.log("Wrong email or password");
    }
  } catch (error) {
    console.log(error);
  }
}

if (username) {
  const currentUsername = getUsername();
  console.log("welcome, these are yout options");
}

//Logout();
