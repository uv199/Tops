import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./LoginCom.css";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/fetures/authSlice/authSlice";
import axios from "axios";
import { BE_URL } from "../../../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginCom() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = () => {
    axios
      .post(`${BE_URL}user/signin`, user)
      .then((resData) => {
        dispatch(login(resData?.data));
        toast.success("login Succesfully");
        if (resData?.data?.data?.userType === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="login-bg-color d-flex justify-content-center">
        <div className="login-p">
          <div className="row">
            <Form>
              <h3 className="pb-4">
                <strong>Login</strong> or <strong>Signup</strong>
              </h3>
              <FormGroup>
                <Label for="email">
                  Email
                  <b>
                    <span>*</span>
                  </b>
                </Label>
                <Input
                  className="w-100 rounded-0"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, email: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  className="w-100 rounded-0"
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e?.target?.value })
                  }
                />
              </FormGroup>
              <p className="loginpara pt-3">
                By Continuing, I agree to the{" "}
                <b>
                  <span>Terms of Use</span>
                </b>{" "}
                &{" "}
                <b>
                  <span>Privacy Policy</span>
                </b>
              </p>{" "}
              <Button
                onClick={() => loginHandler()}
                style={{
                  height: "55px",
                  width: "480px",
                  backgroundColor: "#FF3F6C",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: 0,
                  backgroundColor: "#5FB255",
                }}
              >
                Signin
              </Button>
              <div>
                <p className="loginpara pt-4">
                  Have trouble logging in?{" "}
                  <strong>
                    <span>Get help</span>
                  </strong>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react"
// import { Button, Form, FormGroup, Input, Label } from "reactstrap"
// import Navibar from "../../components/Navigationbar/Navibar"
// import { contextUser } from "./AuthContext"
// import './Login.css'

// export default function Login() {
//     const [loginData, setLoginData] = useState()
//     const auth = contextUser()

//     function addData() {
//         auth.login(loginData)
//     }
//     return (
//         <>
//             <Navibar />
//             <div className="login-bg-color d-flex justify-content-center">
//                 <div className="login-p">
//                     <div className="row">
//                         <Form>
//                             <h3 className='pb-4'><strong>Login</strong> or <strong>Signup</strong></h3>
//                             <FormGroup floating>
//                                 <Input onChange={(e) => setLoginData(e.target.value)}
//                                     className="w-100 rounded-0"
//                                     id="username"
//                                     name="username"
//                                     placeholder="User name*"
//                                     type="text"
//                                 />
//                                 <Label for="exampleUsername">
//                                     User Name<b><span>*</span></b>
//                                 </Label>
//                             </FormGroup>

//                             <FormGroup floating>
//                                 <Input onChange={(e) => setLoginData(e.target.value)}
//                                     className="w-100 rounded-0"
//                                     id="password"
//                                     name="password"
//                                     placeholder="Password"
//                                     type="password"
//                                 />
//                                 <Label for="examplepwd">
//                                     Password
//                                 </Label>
//                             </FormGroup>
//                             <p className='loginpara pt-3'>By Continuing, I agree to the <b><span>Terms of Use</span></b> & <b><span>Privacy Policy</span></b></p>
//                             {' '}

//                             <Button onClick={() => addData()} style={{ height: '55px', width: '480px', backgroundColor: '#FF3F6C', fontWeight: 'bold', border: 'none', borderRadius: 0 }}>
//                                 CONTINUE
//                             </Button>
//                             <div>
//                                 <p className='loginpara pt-4'>Have trouble logging in? <strong><span>Get help</span></strong></p>
//                             </div>
//                         </Form>
//                     </div>
//                 </div >
//             </div>
//         </>
//     )
// }
