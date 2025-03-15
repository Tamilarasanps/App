// import axios from "axios";
// import Toast from "react-native-toast-message";

// const API_url = "http://localhost:5000/productupload";

// export const sendProductData = async ({
//   value,
//   subcato,
//   machineMake,
//   radio,
//   price,
//   selectedImage,
//   selectedVideo,
//   negotiable,
//   description,
//   resetForm,
// }) => {
//   if (
//     !value ||
//     !subcato ||
//     !machineMake ||
//     !radio ||
//     !price ||
//     !selectedImage ||
//     !selectedVideo ||
//     !negotiable ||
//     !description
//   ) {
//     Toast.show({
//       type: "error",
//       text1: "Missing Fields",
//       text2: "Please fill all required fields before submitting",
//       position: "top",
//       topOffset: 0,
//     });
//     return;
//   }
//   if (
//     (!selectedImage || selectedImage.length === 0) &&
//     (!selectedVideo || selectedVideo.length === 0)
//   ) {
//     Toast.show({
//       type: "error",
//       text1: "No Media Selected",
//       text2: "Please upload at least one image or video.",
//       position: "top",
//       topOffset: 0,
//     });
//     return;
//   }
//   const formData = new FormData();
//   formData.append("industry", value);
//   formData.append("category", subcato);
//   formData.append("make", machineMake);
//   formData.append("price", price);
//   formData.append("negotiable", negotiable ? "true" : "false");
//   formData.append("description", description);

//   selectedImage?.forEach((img) => {
//     if (img?.file) {
//       formData.append("images", img.file);
//     }
//   });
//   selectedVideo?.forEach((vid) => {
//     if (vid?.file) {
//       formData.append("videos", vid.file);
//     }
//   });
//   try {
//     const response = await axios.post(API_url, formData, {
//       headers: { "content-type": "multipart/form-data" },
//     });
//     console.log(response.status, "upload successfully");
//     if (response.status === 200 || response.status === 201) {
//       Toast.show({
//         type: "success",
//         text1: "sucess",
//         text2: response.data.message || "Product Upload Successfully",
//         position: "top",
//         topOffset: 0,
//       });
//       setTimeout(() => {}, 1000);
//     }
//   } catch {}
// };
