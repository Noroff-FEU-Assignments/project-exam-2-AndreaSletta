//import { baseUrl } from "./settings/api.js";
//import { getToken } from "./utils/storage.js";
//import { getUsername } from "./utils/storage.js";
//const loading = document.querySelector(".loading");

import { BASE_URL } from "../../../constants/api";

//const username = getUsername();

export default function AddInquiry(event) {
  event.preventDefault();

  const formName = document.querySelector("#formName");
  const formEmail = document.querySelector("#formEmail");
  const formSubject = document.querySelector("#formSubject");
  const formMessage = document.querySelector("#formMessage");

  const nameValue = formName.value.trim();
  const emailValue = formEmail.value.trim();
  const subjectValue = formSubject.value.trim();
  const messageValue = formMessage.value.trim();

  if (
    nameValue.length === 0 ||
    emailValue.length === 0 ||
    subjectValue.length === 0 ||
    messageValue.length === 0
  ) {
    console.log("invalid input");
  }
  addInquiry(nameValue, emailValue, subjectValue, messageValue);
  console.log("please wait...");
  /*
    message.style.display = "block";
    message.innerHTML = `<h2>Processing, please wait...</h2> 
      <i class="fas fa-plus"></i>`;*/
}
async function addInquiry(nameValue, emailValue, subjectValue, messageValue) {
  const newUrl = BASE_URL + "enquiries";
  const uploadUrl = "https://sleepy-falls-61953.herokuapp.com/upload/";

  fetch(nameValue)
    .then(response => response.blob())
    .then(function (myBlob) {
      const formData = new FormData();
      formData.append("files", myBlob);

      //Upload the image to strapi
      fetch(uploadUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ``,
        },
        body: formData,
      })
        .then(response => response.json())
        .then(result => {
          const data = JSON.stringify({
            name: nameValue,
            email: emailValue,
            subject: subjectValue,
            message: messageValue,
          });

          // Upload new product
          const options = {
            method: "POST",
            body: data,
            headers: {
              Authorization: ``,
            },
          };
          try {
            fetch(newUrl, options).then(response => {
              console.log("added");
              console.log(response);
              /*
              function reload() {
                setTimeout(function () {
                  location.reload();
                }, 3000);
              }
              reload();*/
            });
          } catch (error) {
            console.log(error);
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    });
}
