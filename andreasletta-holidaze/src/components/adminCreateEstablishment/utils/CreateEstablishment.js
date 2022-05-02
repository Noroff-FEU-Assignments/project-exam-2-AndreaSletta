import { getToken } from "../../admin/utils/Storage";
import { BASE_URL } from "../../../constants/api";
import axios from "axios";
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
  /*
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
    formFeaturedMessage.innerHTML = "Valid name";
  } else {
    formFeaturedMessage.innerHTML = "Please enter your name";
  }
  if (checkLength(formDescription.value, 0)) {
    formDescriptionMessage.innerHTML = "Valid name";
  } else {
    formDescriptionMessage.innerHTML = "Please enter your name";
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
    formImage2Message.innerHTML = "Valid name";
  } else {
    formImage2Message.innerHTML = "Please enter your name";
  }

  if (checkLength(formImage3.value, 0)) {
    formImage3Message.innerHTML = "Valid name";
  } else {
    formImage3Message.innerHTML = "Please enter your name";
  }

  console.log(`${BASE_URL}accommodations`);
*/
  /*
  //If form vaild, send
  if (
    checkLength(formName.value, 0) &&
    checkLength(formAddress.value, 0) &&
    checkLength(formPrice.value), 0) &&
    checkLength(formFeatured.value, 0) &&
    checkLength(formDescription.value, 0) &&
    checkLength(formType.value, 0)
  ) {
    const data = JSON.stringify({
      name: `${nameValue}`,
      address: `${addressValue}`,
      price: `${priceValue}`,
      featured: `${featuredValue}`,
      description: `${descriptionValue}`,
      type: `${typeValue}`,
    });

    axios
      .post(`${BASE_URL}accommodations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          data,
        },
      })
      .then(response => {
        console.log(response, "posted");
        /*
        function successMessage() {
          setInterval(function successMessage() {
            addMessageContainer.innerHTML = "Message sent";
          }, 2000);
        }
        successMessage();
      })
    
  };*/
  addAccomodation(
    nameValue,
    addressValue,
    priceValue,
    featuredValue,
    descriptionValue,
    typeValue,
    image1Value,
    image2Value,
    image3Value,
    floyenValue,
    museumValue,
    lysverketValue,
    sjobadValue,
    fjordsightseeingValue,
    skostredetValue
  );
}

async function addAccomodation(
  name,
  address,
  price,
  featured,
  description,
  type,
  image1,
  image2,
  image3,
  floyen,
  museum,
  lysverket,
  sjobad,
  fjordsightseeing,
  skostredet
) {
  const uploadUrl = BASE_URL + "upload";
  const productUrl = BASE_URL + "accommodations";
  /*
  const uploadByUrl = async () => {
    URL = image1; // <- image url
    fetch(URL)
      .then(response => response.blob())
      .then(function (myBlob) {
        const formData = new FormData();
        formData.append("files", myBlob);
        console.log(formData);
        fetch(uploadUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then(response => {
            const result = response.json();
            console.log("result", result);
          })
          .catch(function (err) {
            console.log("error:");
            console.log(err);
          });
      });
  };
  uploadByUrl(); 
*/

  fetch(image1)
    .then(response => response.blob())
    .then(function (myBlob) {
      const formData = new FormData();
      console.log(formData);
      formData.append("files", myBlob);
      console.log(myBlob, formData);
      console.log(Object.keys(formData));

      fetch(uploadUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then(response => response.json())
        .then(result => {
          //const imageId = result[0].id;
          console.log(result);
        })
        .catch(function (err) {
          console.log("error:", err);
        }); /*
      axios
        .post(uploadUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: formData,
        })
        .then(response => response.json())
        .then(result => {
          const imageId = result[0].id;
          console.log(result);
        })
        .catch(function (err) {
          console.log("error:", err);
        });*/ /*
    });

  /*

  /*
  /*
  fetch(image1)
    .then(response => response.blob())
    .then(function (myBlob) {
      const formData = new FormData();
      formData.append("files", myBlob);

      //Upload the image to strapi
      fetch(uploadUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then(response => response.json())
        .then(result => {
          const imageId1 = result[0].id;

          const data = JSON.stringify({
            name: name,
            address: address,
            price: price,
         
            featured: featured,
            description: description,
            type: type,
            image1: imageId1,
            image2: imageId2,
            image3: imageId3,
            floyen: floyen,
            museum: museum,
            lysverket: lysverket,
            sjobad: sjobad,
            fjordsightseeing: fjordsightseeing,
            skostredet: skostredet,
          });

          // Upload new product
          const options = {
            method: "POST",
            body: data,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
          try {
            fetch(productUrl, options).then(response => {
              console.log("<h2>Product added</h2>");

              /*
              function reload() {
                setTimeout(function () {
                  location.reload();
                }, 3000);
              }
              reload();*/
      /*
            });
          } catch (error) {
            console.log(error);
            console.log("<h2>Upload failed</h2>");
          }
        })
        .catch(function (err) {
          console.log(err);
          console.log("`<h2>Upload failed</h2> ");
        });*/
    });
}
