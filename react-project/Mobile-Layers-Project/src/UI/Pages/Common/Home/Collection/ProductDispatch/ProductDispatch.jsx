import React, { useLayoutEffect } from 'react'
import './ProductDispatch.css'
import { BoxSeam } from 'react-bootstrap-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

export default function ProductDispatch() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <div className='product'>
                <div className="container">
                    <div className="product_grid">
                        <div className="products">
                            <BoxSeam className='product_icon' />
                            <h4 className='fw-lighter pb-3'>Same Day Dispatch</h4>
                            <p style={{fontSize: "20px", opacity: ".8"}}>All orders placed before 12pm Monday to Friday are dispatched same day.</p>
                        </div>
                        <div className="products">
                            <FontAwesomeIcon icon={faTruckFast} className='product_icon' />
                            <h4 className='fw-lighter pb-3'>Free & Fast Delivery</h4>
                            <p style={{fontSize: "20px", opacity: ".8"}}>Orders to metro cities reach in 2-3 working days.</p>
                        </div>
                        <div className="products">
                            <FontAwesomeIcon icon={faClockRotateLeft} className='product_icon' />
                            <h4 className='fw-lighter pb-3'>Cancellation Policy</h4>
                            <p style={{fontSize: "20px", opacity: ".8"}}>Easy cancellation from the dashboard within 12 hours of placing the order</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
