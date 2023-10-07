import { LogOut } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/fetures/authSlice/authSlice'
import { useNavigate } from 'react-router-dom'
import { LogOut as LogOutIcon } from "lucide-react"

export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOutHandler = () => {
        dispatch(logOut())
        navigate("/login")
    }
    return (
        <>
            <div className='m-5'>

                <h1>

                    Profile
                    show login user data here
                </h1>
                <div>
                    

                    <LogOutIcon color='red' onClick={() => logOutHandler()} />
                </div>
            </div>
        </>
    )
}
