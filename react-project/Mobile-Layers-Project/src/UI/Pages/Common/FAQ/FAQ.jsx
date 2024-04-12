import React, { useLayoutEffect } from 'react'
import "./FAQ.css"

export default function FAQ() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <div className="accordion" id="accordionExample" style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", paddingBottom: "90px"}}>
                <h1 className='text-center pt-5 pb-5' style={{fontSize: "50px"}}>Do the layers skins come pre-cut?</h1>
                <div className="container">

                    {/* 1st box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Will Layers skins damage my phone/device ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Not at all , We use high quality glue which will not damage the back of your device.
                            </div>
                        </div>
                    </div>

                    {/* 2nd box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                What if my Layers skin leaves bubbles on my mobile device after applying it?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Most applications don’t get bubbles if you follow the instructions carefully while applying it, but if bubbles appear push them to the nearest opening. Please follow application instructions carefully to avoid bubbles. Our air release technology makes them very unlikely. If they still manage to squeeze their way through, you can easily get rid of them by pushing them to the nearest opening.
                            </div>
                        </div>
                    </div>

                    {/* 3rd box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Are Layers Skins waterproof ?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes, our skins are water-resistant. However, prolonged exposure to water may cause some harm to the skin. 
                            </div>
                        </div>
                    </div>

                    {/* 4th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Will Layers skins leave behind any residue ?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes, our skins are water-resistant. However, prolonged exposure to water may cause some harm to the skin. 
                            </div>
                        </div>
                    </div>

                    {/* 5th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Can I track my order ?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes, you will get regular updates & tracking details via mail and text messages to let you know about the status of your order. Kindly always also check your Junk/Spam folder as our mail might end up there depending on your mailbox setting.
                            </div>
                        </div>
                    </div>

                    {/* 6th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Are Layers skins fade proof?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Our skins when applied to your device will retain their premium look without fading or discoloring and even when it is exposed to varying climatic conditions. Our skins once applied stay looking their best-come rain or shine. However, a layer of oil and dirt may form over time which may cause dullness to the colors
                            </div>
                        </div>
                    </div>

                    {/* 7th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                How do I install my skin?
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We have made dedicated install videos to ease this process and to help you achieve the best results click here.
                            </div>
                        </div>
                    </div>

                    {/* 8th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                The texture / skin I wish to buy is out of stock , when will it be restocked?
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This is likely to happen due to heavy demand does happen. But don't worry, our out of stock designs textures are usually restocked within 2 weeks unless it's a pop up or limited edition design texture.
                            </div>
                        </div>
                    </div>

                    {/* 9th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Do layers skin offer wireless charging?
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Under normal circumstances, Layers skin won't affect your phone's wireless charging capabilities and will work normally as it should. 
                            </div>
                        </div>
                    </div>

                    {/* 10th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                What if the product has a defect?
                            </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                If you identify a defect in your skin before the application, just send us a mail with clearsome images and videos of the defective skins you received along with your Order ID over email (support@layers.shop) within 7 days of receiving your order.
                            </div>
                        </div>
                    </div>

                    {/* 11th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                The texture / skin I wish to buy is out of stock , when will it be in stock?
                            </button>
                        </h2>
                        <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This does happen at times due to increase in demand for layers skins. But don't worry, the out of stock texture usually is back in stock within 2 weeks.
                            </div>
                        </div>
                    </div>

                    {/* 12th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                Can I return the product once received and get a refund for the same?
                            </button>
                        </h2>
                        <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                No, we do not provide refunds for any orders once they are shipped from our warehouse. However, you can exchange it within 7 days of receiving the product ,with anything else available on our website, just get in touch with us (support@layers.shop) and we’ll work it out.
                            </div>
                        </div>
                    </div>

                    {/* 13th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                I can’t find a layers skin for my device on your website , what should I do?
                            </button>
                        </h2>
                        <div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Chances are we are already working on it. Just drop us a message and we will let you know about the status.
                            </div>
                        </div>
                    </div>

                    {/* 14th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                Can I cancel my order after placing it online?
                            </button>
                        </h2>
                        <div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes, you will be able to cancel it directly from our website until it is shipped from our warehouse. This usually happens around 72 hours [does not include weekends & holidays, shipping will only begin on September 10th, 2022] after you place your order. You cannot cancel it once it is shipped.
                            </div>
                        </div>
                    </div>

                    {/* 15th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                Can I get my Layers skin personalised?
                            </button>
                        </h2>
                        <div id="collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We don’t offer custom skins as of yet. This may change in the future at any one time so please remember to refer to our website.
                            </div>
                        </div>
                    </div>

                    {/* 16th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                I am not happy with your services. What should I do?
                            </button>
                        </h2>
                        <div id="collapseSixteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                We’re sad to hear that, we’re truly sorry if we’ve missed helping you out on time. All you have to do is send us an email at support@layers.shop and we will do our best to provide support and resolve any issues you might have and will support you until you are fully satisfied.
                            </div>
                        </div>
                    </div>

                    {/* 17th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                                What if I receive an incorrect order?
                            </button>
                        </h2>
                        <div id="collapseSeventeen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Contact us immediately upon noticing the incorrect items at support@layers.shop.
                            </div>
                        </div>
                    </div>

                    {/* 18th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                                Are Layers skins scratch resistant?
                            </button>
                        </h2>
                        <div id="collapseEighteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Our Skins are made of high quality vinyl that will protect your device from day to day scratches, however, the skins themselves are not resistant to scratches. Therefore, we recommend maintaining your skin with care to avoid scratches or damage avoiding other objects that could scratch or damage your Skin.
                            </div>
                        </div>
                    </div>

                    {/* 19th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                                How long do Layers skins last?
                            </button>
                        </h2>
                        <div id="collapseNineteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                The lifetime length of time a Skin varies for each device, depending upon the wear and tear that the device is subjected to. All of our Skins are made from the best premium grade glossy vinyl and are printed using a special 6 colour high resolution process, and are coated with a clear finish coating for additional protection.
                            </div>
                        </div>
                    </div>

                    {/* 20th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                                Can Layers skins cause my device to overheat?
                            </button>
                        </h2>
                        <div id="collapseTwenty" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Skins should not cause your device to overheat. However, if you are concerned about this,the Skin causing your device to overheat we recommend checking with the manufacturer of your device.
                            </div>
                        </div>
                    </div>

                    {/* 21th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyOne" aria-expanded="false" aria-controls="collapseTwentyOne">
                                Are Layers the skins easy to remove?
                            </button>
                        </h2>
                        <div id="collapseTwentyOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                To remove the Skin, we recommend gently pulling up on the edges of the Skin using your fingernail. We do not recommend the use of any sharp materials to remove the Skin as they may damage your device. Once the Skin is removed, it will not never again adhere quite as well as the first time. Layers advises customers to have a new   Skin ready to apply to your device immediately.
                            </div>
                        </div>
                    </div>

                    {/* 22th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyTwo" aria-expanded="false" aria-controls="collapseTwentyTwo">
                                How thick are Layers skins?
                            </button>
                        </h2>
                        <div id="collapseTwentyTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Our Skins are made with low-profile high quality vinyl which sticks onto your device. The Skin will provide a thin layer of protective membrane, a buffer between buffering your device and from the occasional scuffs and scrapes from everyday use.
                            </div>
                        </div>
                    </div>

                    {/* 23th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyThree" aria-expanded="false" aria-controls="collapseTwentyThree">
                                How long will it take for my order to ship?
                            </button>
                        </h2>
                        <div id="collapseTwentyThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Your order will be dispatched within 72 hours of receiving it once shipping starts on September 10th, 2022. It may take a bit longer than usual in certain scenarios.
                            </div>
                        </div>
                    </div>

                    {/* 24th box */}
                    <div className="accordion-item acc">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyFour" aria-expanded="false" aria-controls="collapseTwentyFour">
                                Do you deliver pan-India, I live in a small town , can layers deliver to me?
                            </button>
                        </h2>
                        <div id="collapseTwentyFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Yes, We ship nationwide orders all over India.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
