import { ToastContainer } from "react-toastify";
import Router from "./router/Router";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

export default () => (
  <>
    <Router />;
    <ToastContainer />
  </>
);
// import React, { useState } from "react";
// import axios from "axios";

// const FileUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [base64Image, setBase64Image] = useState("");
//   const handleFileChange = (event) => {
//     console.log("-----------  event----------->", event.target?.files);
//     setSelectedFile(event.target.files[0]);
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       // The result property contains the base64-encoded image
//       const base64String = reader.result;
//       console.log("-----------  base64String----------->", base64String)
//       setBase64Image(base64String);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleUpload = (event) => {
//     const formData = new FormData();
//     formData.append("avatar", selectedFile);
//     console.log("File selected:", selectedFile);

//     axios
//       .post("http://localhost:9999/user/upload", formData)
//       .then((response) => {
//         console.log("File uploaded successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error uploading file:", error.response.data);
//       });
//   };
//   return (
//     <div>
//       {/* <p>{base64Image}</p> */}
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default FileUpload;
