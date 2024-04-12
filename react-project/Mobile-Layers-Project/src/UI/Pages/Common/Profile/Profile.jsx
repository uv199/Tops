import { LogIn } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { logout } from '../../../../Redux/Fetures/Auth/AuthSlice'

export default function Profile() {
    const { user } = useSelector((state) => state?.authSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = (e) => {
        e?.preventDefault()
        dispatch(logout())
        navigate("/")
    }

    return (
        <>
            <div className='d-flex justify-content-center p-5'>
                <div className='rounded-1 w-50 border d-flex align-items-center flex-column p-3'>
                    <img src="https://d1y78cl34ykkmt.cloudfront.net/ProfileImage/2020224131816458.png" alt="" className='w-50' />
                    <hr style={{ width: "100%" }} />
                    <div className='w-100'>
                        <h3>Name: {user?.name || "Admin"}</h3>
                        <h3>Email: {user?.email}</h3>
                        <h3>UserType: {user?.userType}</h3>
                        {
                            user?.userType !== "admin" && (
                                <>
                                    <h3>Area: {user?.address?.[0]?.add}</h3>
                                    <h3>City: {user?.address?.[0]?.city}</h3>
                                    <h3>State: {user?.address?.[0]?.state}</h3>
                                </>
                            )
                        }
                        <Button color='danger' className='w-100' onClick={()=>logoutHandler()}>Logout <LogIn /></Button>
                    </div>
                </div>
            </div>
        </>
    )
}
