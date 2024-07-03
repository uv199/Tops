import axios from 'axios'
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

const alldata = { name: "", email: "", number: "", password: "", age: "", address: "", city: "", state: "", pincode: "", cpassword: "" }

export default function Registration() {
    let [data, setdata] = useState(alldata)

    const Submithandler = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post("http://localhost:9999/user/signup", data)
            console.log("🚀 ~ Submithandler ~ response:", response.data)
            setdata(alldata);
            console.log("🚀 ~ Login ~ data:", data)
        } catch (error) {
            console.log("🚀 ~ Submithandler ~ error:", error)
        }
    }

    return (
        <div className=' w-[400px] m-auto mt-5 p-3 text-gray'>
            <h1 className='h1 text-center'>Registration</h1>

            <label>Name*</label>
            <Input value={data.name} type="text" placeholder='Enter your name' className='bg-slate-100' onChange={(e) => setdata({ ...data, name: e.target?.value })} />

            <label>Email*</label>
            <Input value={data.email} type="email" placeholder='Enter your email' className='bg-slate-100' onChange={(e) => setdata({ ...data, email: e.target?.value })} />

            <label>Number*</label>
            <Input value={data.number} type="text" placeholder='Enter your number' className='bg-slate-100' onChange={(e) => setdata({ ...data, number: e.target?.value })} />

            <label>Password*</label>
            <Input value={data.password} type="password" placeholder='Enter your Password' className='bg-slate-100' onChange={(e) => setdata({ ...data, password: e.target?.value })} />

            <label>Age*</label>
            <Input value={data.age} type="number" placeholder='Enter your age' className='bg-slate-100' onChange={(e) => setdata({ ...data, age: e.target?.value })} />

            <label>Address-1*</label>
            <Input value={data.address} type="text" placeholder='Enter your address' className='bg-slate-100' onChange={(e) => setdata({ ...data, address: e.target?.value })} />

            <label>City*</label>
            <Input value={data.city} type="text" placeholder='Enter your city' className='bg-slate-100' onChange={(e) => setdata({ ...data, city: e.target?.value })} />

            <label>State*</label>
            <Input value={data.state} type="text" placeholder='Enter your state' className='bg-slate-100' onChange={(e) => setdata({ ...data, state: e.target?.value })} />

            <label>Pincode*</label>
            <Input value={data.pincode} type="text" placeholder='Enter your pincode' className='bg-slate-100' onChange={(e) => setdata({ ...data, pincode: e.target?.value })} />


            {/* <label>Confirm Password*</label>
            <Input value={data.cpassword} type="password" placeholder='Enter your confirm password' className='bg-slate-100' onChange={(e) => setdata({ ...data, cpassword: e.target?.value })} /> */}

            <div className='text-center mt-3'>
                <Button className='border-2 border-red-600 text-red-600 bg-white hover:text-red-600 hover:border-red-600' onClick={(e) => Submithandler(e)}>REGISTER</Button>
            </div>
        </div>
    )
}
