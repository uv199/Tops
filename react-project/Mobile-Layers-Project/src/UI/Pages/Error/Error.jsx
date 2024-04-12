import React, { useLayoutEffect } from 'react'
import { Button } from 'reactstrap'
import './Error.css'

export default function Error() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <div className="error">
                <div className="container">
                    <div className="error_flex">
                        <div className="error1">
                            <h1 className='display-4 fw-fw-bolder'>Page not Found</h1>
                            <div className="borderb border-3 border-black border-bottom w-25 mt-4"></div>
                        </div>
                        <div className="error1">
                            <p style={{fontFamily: "cursive"}}>The page you are looking for cannot be found.</p>
                            <div className="button mt-3">
                                <Button className='me-3 p-3 rounded-5 bg-black'>CONTINUE BROWSING</Button>
                                <Button className='me-3 p-3 rounded-5 border-2 border-black text-black bg-transparent'>SEARCH OUT STORE</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
