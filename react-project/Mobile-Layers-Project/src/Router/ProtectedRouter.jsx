import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRouter({ Component }) {
    const navigate = useNavigate()
    const data = useSelector((state) => state?.authSlice)

    useEffect(() => {
        if (!data || data?.user?.userType !== "admin") {
            navigate("/login")
        }
    })

    return (
        <div>
            {Component}
        </div>
    )
}
export const ProtectedRouteUser = ({ ComponentUser }) => {
    const navigate = useNavigate();
    const data = useSelector(state => state?.authSlice)
    
    useEffect(() => {
        if (!data || data?.user?.userType !== "customer" && data?.user?.userType !== "admin") {
            navigate("/login")
        }
    })

    return <div>{ComponentUser}</div>
}