import { BASE_URL } from "../../../constants/api";
import { getToken } from "../../admin/utils/Storage";
const token = getToken();

export default async function UploadAccomodation(
  name,
  address,
  price,
  featured,
  description,
  type,
  image1,
  image2,
  image3,
  breakfast,
  gym,
  internett,
  parking,
  pet,
  resturant,
  pool,
  floyen,
  museum,
  lysverket,
  sjobad,
  fjordsightseeing,
  skostredet
) {
  const uploadUrl = BASE_URL + "upload";
  const productUrl = BASE_URL + "accommodations";
  let imageIDs = [];
  imageId1();
  imageId2();
  imageId3();

  //upload image 1
  function imageId1() {
    fetch(image1)
      .then(response => response.blob())
      .then(function (myBlob) {
        const formData = new FormData();
        formData.append("files", myBlob);

        fetch(uploadUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then(response => response.json())
          .then(result => {
            const id1 = result[0].id;
            imageIDs.push(id1);
          })
          .catch(function (err) {
            console.log("error:", err);
          });
      });
  }

  //upload image 2
  function imageId2() {
    fetch(image2)
      .then(response => response.blob())
      .then(function (myBlob) {
        const formData = new FormData();
        formData.append("files", myBlob);

        fetch(uploadUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then(response => response.json())
          .then(result => {
            const imageId2 = result[0].id;
            imageIDs.push(imageId2);
          })
          .catch(function (err) {
            console.log("error:", err);
          });
      });
  }

  //upload image 3
  function imageId3() {
    fetch(image3)
      .then(response => response.blob())
      .then(function (myBlob3) {
        const formData = new FormData();
        formData.append("files", myBlob3);

        fetch(uploadUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then(response => response.json())
          .then(result => {
            const imageId3 = result[0].id;
            imageIDs.push(imageId3);
          })
          .catch(function (err) {
            console.log("error:", err);
          });
      });
  }
  const message = document.querySelector("#addMessageContainer");
  message.innerHTML = `
        <i class="fas fa-spinner fa-pulse  text-body"></i>
   `;
  function upload() {
    setTimeout(function () {
      try {
        const data = JSON.stringify({
          data: {
            name: name,
            address: address,
            price: price,
            featured: featured,
            description: description,
            type: type,
            facilities: [
              {
                Breakfast_included: breakfast,
                Gym: gym,
                Internett: internett,
                Parking_available: parking,
                Pet_friendly: pet,
                Resturant: resturant,
                Pool: pool,
              },
            ],
            attractions: [
              {
                Floyen: floyen,
                Edvard_Grieg_Museum_Troldhaugen: museum,
                Lysverket: lysverket,
                Nordnes_sjobad: sjobad,
                Fjordsightseeing: fjordsightseeing,
                Skostredet: skostredet,
              },
            ],
            images: imageIDs,
          },
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

        fetch(productUrl, options).then(response => {
          message.innerHTML = `<p>Content added!</p>`;

          function reload() {
            setTimeout(function () {
              window.location.reload(false);
            }, 1500);
          }
          reload();
        });
      } catch (error) {
        console.log(error);
        message.innerHTML = `<p>Upload failed!</p>`;
      }
    }, 3000);
  }
  upload();
}
