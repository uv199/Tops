import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Input, FormGroup, Label } from 'reactstrap'
import '../Login/Login.css'
import "./SignUp.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { Eye, EyeOff } from 'lucide-react'
import { login } from '../../../../Redux/Fetures/Auth/AuthSlice'
import { BE_URL } from '../../../../Config'

const initializeData = {
    name: "",
    email: "",
    number: "",
    password: "",
    conPassword: "",
    gender: "",
    age: "",
}

const gender = ["male", "female", "kids"]

const initializeAddress = {
    add: "",
    city: "",
    state: "",
    pincode: "",
}

export default function SignUp(props) {
    const [user, setUser] = useState(initializeData)
    const [address, setAddress] = useState(initializeAddress)
    const [showPassword, setShowPassword] = useState(false)
    const [conShowPassword, setConShowPassword] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const quantityInputRef = useRef(null)

    // password show & hide
    const passwordShowHideHandler = (field)=>{
        if(field === "password"){
            setShowPassword(!showPassword)
        }else if(field === "conPassword"){
            setConShowPassword(!conShowPassword)
        }
    }

    const submitHandler = (e) => {
        e?.preventDefault()
        if (user?.password !== user?.conPassword) return toast.error("Password and confirm password does not match")
        axios({
            method: "post",
            url: BE_URL+"/user/signup",
            data: { ...user, address: [address] }
        }).then((res) => {
            dispatch(login(res?.data))
            toast.success("User login success")
            // console.log("====res_data===>", res.data)
            navigate("/")
            setUser(initializeData)
            setAddress(initializeAddress)
        }).catch((err) => {
            // console.log("=======err======>", err)
            toast.error("Something is Wrong")
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        const ignoreScroll = (e) => {
            e.preventDefault();
            quantityInputRef.current && quantityInputRef.current.addEventListener("wheel", ignoreScroll)
        }
    }, [quantityInputRef])

    return (
        <>
            <div className='w-50 text-center m-auto'>
                <h1 className='heading'>Create Account</h1>
                <Form autoComplete='off' style={{ paddingBottom: "60px" }} onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Input value={user?.name} type='text' placeholder='Name' className='txt' onChange={(e) => setUser({ ...user, name: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={user?.email} placeholder="Email" type="email" className='txt' onChange={(e) => setUser({ ...user, email: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={user?.age} type='text' className='txt' placeholder='Enter Age' onChange={(e) => setUser({ ...user, age: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup tag="fieldset" className='d-flex gap-3' style={{border: "2px solid #dee2e6", padding: "15px", borderRadius: "0.375rem"}}>
                        <Label className='m-0' style={{color: "#212529", opacity: ".7"}}>Gender</Label>
                        {
                            gender.map((e, i) => {
                                return(
                                    <FormGroup check key={i}>
                                        <Input value={user?.gender} checked={user?.gender === e} name="radio1" type="radio" onChange={() => setUser({ ...user, gender: e })} />
                                        <Label className='m-0' style={{color: "#212529", opacity: ".7"}} check>{e}</Label>
                                    </FormGroup>
                                )
                            })
                        }
                    </FormGroup>
                    <FormGroup>
                        <Input value={user?.number} type='text' className='txt' placeholder='Mobile Number' onChange={(e) => setUser({ ...user, number: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={address?.add} type='text' className='txt' placeholder='Enter Area' onChange={(e) => setAddress({ ...address, add: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={address?.city} type='text' className='txt' placeholder='Enter City' onChange={(e) => setAddress({ ...address, city: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={address?.state} type='text' className='txt' placeholder='Enter State' onChange={(e) => setAddress({ ...address, state: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Input value={address?.pincode} type='text' className='txt' placeholder='Enter Pincode' onChange={(e) => setAddress({ ...address, pincode: e?.target?.value })} />
                    </FormGroup>
                    <FormGroup className='position-relative'>
                        <Input ref={quantityInputRef} value={user?.password} placeholder="Password" type={showPassword ? "text" : "password"} className='txt' onChange={(e) => setUser({ ...user, password: e?.target?.value })} {...props} />
                        {
                            showPassword ?
                            <div className='eye_hover'>
                                <EyeOff color='black' role='button' onClick={()=>passwordShowHideHandler("password")} /> 
                            </div> :
                            <div className='eye_hover'>
                                <Eye role='button' onClick={()=>passwordShowHideHandler("password")} />
                            </div>
                        }
                    </FormGroup>
                    <FormGroup className='position-relative'>
                        <Input value={user?.conPassword} placeholder="Confirm Password" type={conShowPassword ? "text" : "password"} className='txt' onChange={(e) => setUser({ ...user, conPassword: e?.target?.value })} />
                        {
                            conShowPassword ?
                            <div className='eye_hover'>
                                <EyeOff color='black' role='button' onClick={()=>passwordShowHideHandler("conPassword")} />
                            </div> :
                            <div className='eye_hover'>
                                    <Eye role='button' onClick={()=>passwordShowHideHandler("conPassword")} />
                                </div>
                        }
                    </FormGroup>
                    <Button className='signin'>CREATE</Button>
                    <div className='d-flex align-items-center pb-3'>
                        <Input className='m-0' type='checkbox' />
                        <span className='ps-2' style={{ fontSize: "14px" }}>
                            Sign up for our newsletter. Get 10% off on 1sh purchase by using Coupon code: <span className='fw-bold'>WELCOME10</span>
                        </span>
                    </div>
                    <p className='or'>Or login using</p>
                    <span style={{ opacity: ".62" }}>Already have Account ? </span>
                    <NavLink to={"/login"} className="text-decoration-none">
                        <span role='button' className='signup'>Login</span>
                    </NavLink>
                </Form>
            </div>
        </>
    )
}
