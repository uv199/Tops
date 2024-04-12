import React, { useLayoutEffect } from 'react'

export default function Refunds() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <div className="refund" style={{ paddingBottom: "80px" }}>
                <div className="container">
                    <div className="refund_page">
                        <h1 className='pt-5 ps-5 pb-4' style={{ fontSize: "50px", fontWeight: "400" }}>Refunds/Cancellations/Shipping Policy</h1>
                        <div className='border-bottom border-3 border-black' style={{ width: "6%", marginLeft: "439px" }}></div>
                        <div className='pb-4' style={{ paddingTop: "100px", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                            <p>PRODUCT DISCLAIMER</p>
                            <p>All images on the website are enhanced during post production process, actual product colours may vary.</p>
                            <p>RETURNS</p>
                            <p>
                                All returns must be postmarked within 3 days of the purchase date for Damage and wrong product. All returned items must be new and in an unused condition.
                            </p>
                            <p>RETURN PROCESS</p>
                            <p>
                                To return an item, please email customer service at support@layers.shop with a clear video that shows the product’s defects along with your Order ID. Your order will be picked up within 4 working days, and we’ll work on sending you a replacement within 3 working days upon receipt of the product by our team.
                            </p>
                            <p>REFUNDS</p>
                            <p>
                                <ins>We do not offer refunds after orders have been shipped. In the case of a defective product, we only offer replacements.</ins> Please email us at support@layers.shop with a clear video that shows the product’s defects along with your Order ID. Your order will be picked up within 4 working days, and we’ll work on sending you a replacement within 3 working days upon receiving the product by our team.
                            </p>
                            <p>SHIPPING</p>
                            <p>We will ship your order within 24-48 hours and you will get a tracking link over Email and SMS.</p>
                            <p>CANCELLATIONS</p>
                            <p>
                                Orders can't be cancelled once its shipped, you can cancel the order before it is shipped by visiting the my account page .
                            </p>
                            <p>QUESTIONS</p>
                            <p>If you have any questions, please contact us at: support@layers.shop</p>
                            <p>Layers will not stand liable for any changes of any damage caused by the customer to the product.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
