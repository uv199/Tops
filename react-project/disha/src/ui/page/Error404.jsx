import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Error404() {
    const navigate = useNavigate()
    return (
        <div className='bg-blue-200 h-[500px] flex flex-col justify-center items-center'>
            <h1 className='text-9xl mt-10'>Error404...!!!</h1>
            <Button className="m-5" onClick={() => navigate(-1)}>Go to back</Button>
        </div>
    )
}
