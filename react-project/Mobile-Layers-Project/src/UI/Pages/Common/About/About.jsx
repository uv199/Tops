import React, { useLayoutEffect } from 'react'

export default function About() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <div className="about" style={{paddingBottom: "80px"}}>
                <div className="container">
                    <div className="about_page">
                        <h1 className='pt-5 ps-5 pb-4' style={{fontSize: "50px", fontWeight: "400"}}>About Us</h1>
                        <div className='border-bottom border-3 border-black' style={{width: "6%", marginLeft: "120px"}}></div>
                        <div className='pb-4' style={{paddingTop: "100px", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
                            <p>
                                We, at layers, wondered why we limit ourselves when it comes to expression and creativity which are essential parts of who we are.
                            </p>
                            <p>
                                As technology enthusiasts, we figured out that skins can be one of the best ways to express yourself. Based on our team members' journeys and experiences, we have made sure these layers are not just accessories to your phone but an extension of your personality.
                            </p>
                            <p>
                                We wanted to create something stylish, sturdy, and stable. Honestly, finding this combination is the toughest part of creating layers but our skins are designed after a lot of research and with 3M materials, we make sure that every skin lasts as long as you wish.
                            </p>
                            <p>
                                A brand that started as a mere question, why can’t top-notch quality stylish layers be accessible to everyone, is now a creative community that celebrates those who dare to dream across the country.
                            </p>
                            <p>
                                Our ambition is to come up with products and experiences that enhance your creativity and inspire you to do more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
