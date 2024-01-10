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

//   const handleUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("avatar", selectedFile);
//       console.log("-----------  formData----------->", formData);

//       axios
//         .post("http://localhost:9999/user/upload", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         })
//         .then((response) => {
//           // Handle success
//           console.log("File uploaded successfully:", response.data);
//         })
//         .catch((error) => {
//           // Handle error
//           console.error("Error uploading file:", error);
//         });
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const config = {
        headers: {
          "Content-Type": selectedFile.type,
        },
      };

      axios
        .post("http://localhost:9999/user/upload", selectedFile, config)
        .then((response) => {
          // Handle success
          console.log("File uploaded successfully:", response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error uploading file:", error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
