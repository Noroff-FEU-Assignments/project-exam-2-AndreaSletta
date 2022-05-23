import UploadAccomodation from "./UploadAccomodation";

export default function CreateEstablishment(event) {
  event.preventDefault();

  const message = document.querySelector("#addMessageContainer");

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

  const formImage2 = document.querySelector("#formImage2");

  const formImage3 = document.querySelector("#formImage3");

  const formBreakfast = document.querySelector("#formBreakfast");

  const formGym = document.querySelector("#formGym");

  const formInternett = document.querySelector("#formInternett");

  const formParking = document.querySelector("#formParking");

  const formPet = document.querySelector("#formPet");

  const formPool = document.querySelector("#formPool");

  const formResturant = document.querySelector("#formResturant");

  const formFloyen = document.querySelector("#formFloyen");

  const formMuseum = document.querySelector("#formMuseum");

  const formLysverket = document.querySelector("#formLysverket");

  const formSjobadt = document.querySelector("#formSjobadt");

  const formFjordsightseeing = document.querySelector("#formFjordsightseeing");

  const formSkostredet = document.querySelector("#formSkostredet");

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

  // Check length
  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  //validate form and display errors

  if (checkLength(formName.value, 0)) {
    formNameMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid name</p></div>`;
  } else {
    formNameMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter the accommodation name</p></div>`;
  }

  if (checkLength(formAddress.value, 0)) {
    formAddressMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid address</p></div>`;
  } else {
    formAddressMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter the accommodation address</p></div>`;
  }
  if (checkLength(formPrice.value, 0)) {
    formPriceMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid price</p></div>`;
  } else {
    formPriceMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter the accommodation price</p></div>`;
  }
  if (checkLength(formFeatured.value, 0)) {
    formFeaturedMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid value</p></div>`;
  } else {
    formFeaturedMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please choose if accommodation is featured</p></div>`;
  }
  if (checkLength(formDescription.value, 0)) {
    formDescriptionMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid description</p></div>`;
  } else {
    formDescriptionMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please enter your accommodation description</p></div>`;
  }

  if (checkLength(formType.value, 0)) {
    formTypeMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-check text-success pe-2"></i>
    <p>Valid accommodation type</p></div>`;
  } else {
    formTypeMessage.innerHTML = `<div class="vertical-align"><i class="fa fa-solid fa-exclamation text-danger pe-2"></i>
    <p>Please choose an accommodation type</p></div>`;
  }

  if (
    checkLength(formName.value, 0) &&
    checkLength(formAddress.value, 0) &&
    checkLength(formPrice.value, 0) &&
    checkLength(formFeatured.value, 0) &&
    checkLength(formDescription.value, 0) &&
    checkLength(formType.value, 0)
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
  } else {
    message.innerHTML = `<p>Wrong input!</p>`;
  }
}
