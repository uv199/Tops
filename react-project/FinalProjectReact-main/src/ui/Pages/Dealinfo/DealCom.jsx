import React from 'react'
import './DealCom.css'

export default function DealCom() {
    return (
        <>
            <div className="deal-banner">
                <div className="image-column">
                    <div className="image">
                        <div className="price-box">
                            <div className="inner-price">
                                <span className='price'><strong>30%</strong> <br />off per Kg</span>
                            </div>
                        </div>
                        <img src="https://technext.github.io/frutika/assets/img/a.jpg" alt="" />
                    </div>
                </div>
                <div className="content-column">
                    <h1><span>Deal</span> of the month</h1>
                    <p className='deal-txt' style={{ textTransform: 'uppercase', fontSize: '25px' }}>hikan strawberry</p>
                    <p style={{ fontSize: '18px' }}>Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam<br />  similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis<br /> iste natus error sit voluptatem accusant</p>
                    {/* countdown timer */}
                    <div className="timer-count">
                        <div className="time-countdown">
                            <div className="day-counter">
                                <div className="inner">
                                    <span>00</span>
                                    <p style={{ fontSize: '16px' }}>Days</p>
                                </div>
                            </div>
                            <div className="hour-counter">
                                <div className="inner">
                                    <span>00</span>
                                    <p style={{ fontSize: '16px' }}>Hours</p>
                                </div>
                            </div>
                            <div className="min-counter">
                                <div className="inner">
                                    <span>00</span>
                                    <p style={{ fontSize: '16px' }}>Mins</p>
                                </div>
                            </div>
                            <div className="sec-counter">
                                <div className="inner">
                                    <span>00</span>
                                    <p style={{ fontSize: '16px' }}>Secs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cart-button'>
                        <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                    </div>
                </div>

            </div>
        </>
    )
}
