import { getToken } from "../../admin/utils/Storage";
import { BASE_URL } from "../../../constants/api";
import axios from "axios";
import { useState, useEffect } from "react";
import UploadAccomodation from "./UploadAccomodation";
const token = getToken();

export default function CreateEstablishment(event) {
  event.preventDefault();

  //const addMessageContainer = document.querySelector("#addMessageContainer");
  const formName = document.querySelector("#formName");
  const formNameMessage = document.querySelector("#formNameMessage");

  const formAddress = document.querySelector("#formAddress");
  const formAddressMessage = document.querySelector("#formAddressMessage");

  const formPrice = document.querySelector("#formPrice");
  const formPriceMessage = document.querySelector("#formPriceMessage");

  const formFeatured = document.querySelector("#formFeatured");
  const formFeaturedMessage = document.querySelector("#formFeaturedMessage");

  const formDescription = document.querySelector("#formDescription");
  const formDescriptionMessage = document.querySelector(
    "#formDescriptionMessage"
  );

  const formType = document.querySelector("#formType");
  const formTypeMessage = document.querySelector("#formTypeMessage");

  const formImage1 = document.querySelector("#formImage1");
  const formImage1Message = document.querySelector("#formImage1Message");

  const formImage2 = document.querySelector("#formImage2");
  const formImage2Message = document.querySelector("#formImage2Message");

  const formImage3 = document.querySelector("#formImage3");
  const formImage3Message = document.querySelector("#formImage3Message");

  const formBreakfast = document.querySelector("#formBreakfast");
  const formBreakfastMessage = document.querySelector("#formBreakfastMessage");

  const formGym = document.querySelector("#formGym");
  const formGymMessage = document.querySelector("#formGymMessage");

  const formInternett = document.querySelector("#formInternett");
  const formInternettMessage = document.querySelector("#formInternettMessage");

  const formParking = document.querySelector("#formParking");
  const formParkingMessage = document.querySelector("#formParkingMessage");

  const formPet = document.querySelector("#formPet");
  const formPetMessage = document.querySelector("#formPetMessage");

  const formPool = document.querySelector("#formPool");
  const formPoolMessage = document.querySelector("#formPoolMessage");

  const formResturant = document.querySelector("#formResturant");
  const formResturantMessage = document.querySelector("#formResturantMessage");

  const formFloyen = document.querySelector("#formFloyen");
  const formFloyenMessage = document.querySelector("#formFloyenMessage");

  const formMuseum = document.querySelector("#formMuseum");
  const formMuseumMessage = document.querySelector("#formMuseumMessage");

  const formLysverket = document.querySelector("#formLysverket");
  const formLysverketMessage = document.querySelector("#formLysverketMessage");

  const formSjobadt = document.querySelector("#formSjobadt");
  const formSjobadtMessage = document.querySelector("#formSjobadtMessage");

  const formFjordsightseeing = document.querySelector("#formFjordsightseeing");
  const formFjordsightseeingMessage = document.querySelector(
    "#formFjordsightseeingMessage"
  );

  const formSkostredet = document.querySelector("#formSkostredet");
  const formSkostredetMessage = document.querySelector(
    "#formSkostredetMessage"
  );

  const nameValue = formName.value.trim();
  const addressValue = formAddress.value.trim();
  const priceValue = formPrice.value.trim();
  const featuredValue = formFeatured.value.trim();
  const descriptionValue = formDescription.value.trim();
  const typeValue = formType.value.trim();
  const image1Value = formImage1.value.trim();
  const image2Value = formImage2.value.trim();
  const image3Value = formImage3.value.trim();

  const breakfastValue = CheckCheckboxe(formBreakfast);
  const gymValue = CheckCheckboxe(formGym);
  const internettValue = CheckCheckboxe(formInternett);
  const parkingValue = CheckCheckboxe(formParking);
  const petValue = CheckCheckboxe(formPet);
  const resturantValue = CheckCheckboxe(formResturant);
  const poolValue = CheckCheckboxe(formPool);
  const floyenValue = CheckCheckboxe(formFloyen);
  const museumValue = CheckCheckboxe(formMuseum);
  const lysverketValue = CheckCheckboxe(formLysverket);
  const sjobadValue = CheckCheckboxe(formSjobadt);
  const fjordsightseeingValue = CheckCheckboxe(formFjordsightseeing);
  const skostredetValue = CheckCheckboxe(formSkostredet);

  //Check checkboxe
  function CheckCheckboxe(input) {
    if (input == null) {
      return false;
    } else if (input.checked) {
      return true;
    } else {
      return false;
    }
  }

  // checkLength
  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  //validate form and display errors

  if (checkLength(formName.value, 0)) {
    formNameMessage.innerHTML = "Valid name";
  } else {
    formNameMessage.innerHTML = "Please enter your name";
  }

  if (checkLength(formAddress.value, 0)) {
    formAddressMessage.innerHTML = "Valid name";
  } else {
    formAddressMessage.innerHTML = "Please enter your name";
  }
  if (checkLength(formPrice.value, 0)) {
    formPriceMessage.innerHTML = "Valid name";
  } else {
    formPriceMessage.innerHTML = "Please enter your name";
  }
  if (checkLength(formFeatured.value, 0)) {
    formFeaturedMessage.innerHTML = `<i class="fa fa-solid fa-check">Valid name</i>`;
  } else {
    formFeaturedMessage.innerHTML = `<i class="fa fa-solid fa-x">"Please enter your name"</i>`;
  }
  if (checkLength(formDescription.value, 0)) {
    formDescriptionMessage.innerHTML = "Valid name";
  } else {
    formDescriptionMessage.innerHTML = `<i class="fa fa-solid fa-x">Please enter your name</i>`;
  }
  if (checkLength(formType.value, 0)) {
    formTypeMessage.innerHTML = "Valid name";
  } else {
    formTypeMessage.innerHTML = "Please enter your name";
  }
  if (checkLength(formImage1.value, 0)) {
    formImage1Message.innerHTML = "Valid name";
  } else {
    formImage1Message.innerHTML = "Please enter your name";
  }

  if (checkLength(formImage2.value, 0)) {
    formImage2Message.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid image url</p></div>`;
  } else {
    formImage2Message.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter a valid image url</p></div>`;
  }

  if (checkLength(formImage3.value, 0)) {
    formImage3Message.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid image url</p></div>`;
  } else {
    formImage3Message.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter a valid image url</p></div>`;
  }

  function isImage(url) {
    var pattern = new RegExp(
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$"
    ); // fragment locator
    return !!pattern.test(url);
  }
  console.log(isImage(formImage3.value));
  console.log(formImage3.value);

  //If form vaild, send
  if (
    checkLength(formName.value, 0) &&
    checkLength(formAddress.value, 0) &&
    checkLength(formPrice.value, 0) &&
    checkLength(formFeatured.value, 0) &&
    checkLength(formDescription.value, 0) &&
    checkLength(formType.value, 0) &&
    checkLength(formImage1.value, 0) &&
    checkLength(formImage2.value, 0) &&
    checkLength(formImage3.value, 0)
  ) {
    UploadAccomodation(
      nameValue,
      addressValue,
      priceValue,
      featuredValue,
      descriptionValue,
      typeValue,
      image1Value,
      image2Value,
      image3Value,
      breakfastValue,
      gymValue,
      internettValue,
      parkingValue,
      petValue,
      resturantValue,
      poolValue,
      floyenValue,
      museumValue,
      lysverketValue,
      sjobadValue,
      fjordsightseeingValue,
      skostredetValue
    );
  }
}
