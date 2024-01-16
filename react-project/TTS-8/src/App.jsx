// import { ToastContainer } from "react-toastify";
// import Router from "./router/Router";
// import "./App.css";
// import "react-toastify/dist/ReactToastify.css";

// export default () => (
//   <>
//     <Router />;
//     <ToastContainer />
//   </>
// );
// import React, { useState } from "react";
// import axios from "axios";

// const FileUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = (event) => {
//     const formData = new FormData();
//     formData.append("avatar", event.target.files[0]);
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
//       <input type="file" onChange={handleUpload} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default FileUpload;

import React from "react";
import "./App.css";
import { Key } from "lucide-react";

export default () => {
  return (
    <div className="macbook-air">
      <div className="div">
        <img
          className="blue-white-leafy"
          alt="Blue white leafy"
          src="blue-white-leafy-background-vector-53876-136080-1.png"
        />
        <p className="hello-guyss">
          <span className="text-wrapper">Hello</span>
          <span className="span">,</span>
          <span className="text-wrapper-2">&nbsp;</span>
          <span className="text-wrapper-3">Guyss!</span>
        </p>
        <div className="frame">
          <div className="overlap-group">
            <div className="text-wrapper-4">Login</div>
            <img className="line" alt="Line" src="line-1.svg" />
          </div>
          <div className="text-wrapper-5">SignUp</div>
        </div>
        <img className="img" alt="Line" src="line-2.svg" />
        <img className="line-2" alt="Line" src="line-3.svg" />
        <div className="text-wrapper-6">Enter your email</div>
        <div className="text-wrapper-7">Enter Password</div>
        <img
          className="basil-eye-closed"
          alt="Basil eye closed"
          src="basil-eye-closed-solid.svg"
        />
        <img
          className="flat-color-icons"
          alt="Flat color icons"
          src="flat-color-icons-google.svg"
        />
        <img className="vector" alt="Vector" src="vector.svg" />
        <div className="text-wrapper-8">Or</div>
        <div className="overlap">
          <div className="text-wrapper-9">Login</div>
        </div>
      </div>
    </div>
  );
};
