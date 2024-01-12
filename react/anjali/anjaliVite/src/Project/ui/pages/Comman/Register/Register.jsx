// import axios from "axios";
// import React, { useState } from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import { BE_URL } from "../../../../config";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const intialstate = {
//   name: "",
//   email: "",
//   number: "",
//   password: "",
//   age: "",
// };

// const intialAdd = {
//   add: "vesu",
//   city: "surat",
//   state: "guj",
//   pinCode: "395007",
// };

// let userFeild = [
//   { key: "name", type: "text" },
//   { key: "email", type: "text" },
//   { key: "password", type: "password" },
//   { key: "number", type: "number" },
//   { key: "age", type: "number" },
// ];
// let addFeild = [
//   { key: "add", type: "textarea" },
//   { key: "city", type: "text" },
//   { key: "state", type: "text" },
//   { key: "pinCode", type: "text" },
// ];
// export default function Register() {
//   let [user, setUser] = useState(intialstate);
//   let [add, setAdd] = useState(intialAdd);

//   const navigate = useNavigate();
//   const registerHandler = (e) => {
//     e.preventDefault();

//     console.log("-----------  user----------->", user);
//     console.log("-----------  add----------->", add);
//     axios({
//       method: "post",
//       url: `${BE_URL}/user/signup`,
//       data: { ...user, address: [add] },
//     })
//       .then((res) => {
//         console.log(res.data);
//         let { data, token } = res.data;
//         localStorage?.setItem("token", JSON?.stringify(token));
//         localStorage?.setItem("loginUser", JSON?.stringify(data));
//         toast.success("login success");
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log("err", err);
//         toast.error("somthing is wrong");
//       });
//   };

//   return (
//     <div className="w-100 h-100 d-flex flex-column  justify-content-center align-items-center">
//       <Form
//         onSubmit={registerHandler}
//         className="w-50 border border-dark  rounded-2 p-4 mt-4"
//       >
//         <h1 className="text-center">Registeration Form</h1>
//         <hr className="w-100" />
//         {userFeild?.map((ele, i) => {
//           return (
//             <FormGroup key={i}>
//               <Label className="text-capitalize" for={ele?.key}>
//                 {ele?.key}
//               </Label>
//               <Input
//                 id={ele?.key}
//                 onChange={(e) =>
//                   setUser({ ...user, [ele?.key]: e?.target?.value })
//                 }
//                 placeholder={`Enter your ${ele?.key}`}
//                 type={ele?.type}
//               />
//             </FormGroup>
//           );
//         })}
//         {addFeild?.map((ele, i) => {
//           return (
//             <FormGroup key={i}>
//               <Label className="text-capitalize" for={ele?.key}>
//                 {ele?.key}
//               </Label>
//               <Input
//                 id={ele?.key}
//                 onChange={(e) =>
//                   setAdd({ ...add, [ele?.key]: e?.target?.value })
//                 }
//                 placeholder={`Enter your ${ele?.key}`}
//                 type={ele?.type}
//               />
//             </FormGroup>
//           );
//         })}
//         <Button className="w-100" color="danger">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }

import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      <input {...register("name")} />
      <input type="number" {...register("age", { required: true })} />
      {errors?.age && <h1>please add number</h1>}
      <input type="number" {...register("number")} />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
