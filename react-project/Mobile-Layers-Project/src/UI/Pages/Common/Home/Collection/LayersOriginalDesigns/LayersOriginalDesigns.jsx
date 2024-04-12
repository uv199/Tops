import React, { useLayoutEffect } from 'react'
import './LayersOriginalDesigns.css'
import blackcart from '../../../../../../../public/blackcrack-logo.webp'
import astrorainbow from '../../../../../../../public/astrorainbow-logo.webp'
import cyberhud from '../../../../../../../public/cyberhud-logo.webp'
import matrix from '../../../../../../../public/matrix-logo.webp'
import beforesunset from '../../../../../../../public/beforesunset-logo.webp'
import goldenswirl from '../../../../../../../public/goldenswirl.webp'
import kid from '../../../../../../../public/kid-logo.webp'
import kindness from '../../../../../../../public/kindness-logo.webp'
import { NavLink } from 'react-router-dom'

export default function LayersOriginalDesigns() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    let layersData = [
        {
            layersImg: blackcart,
            layerText: "Select your Device",
            layersType: "Black Crack",
            layersPrice: "₹ 599"
        },
        {
            layersImg: astrorainbow,
            layerText: "Select your Device",
            layersType: "Astro Rainbow",
            layersPrice: "₹ 599"
        },
        {
            layersImg: cyberhud,
            layerText: "Select your Device",
            layersType: "Cyberhud",
            layersPrice: "₹ 599"
        },
        {
            layersImg: matrix,
            layerText: "Select your Device",
            layersType: "Matrix",
            layersPrice: "₹ 599"
        },
        {
            layersImg: beforesunset,
            layerText: "Select your Device",
            layersType: "Before Sunset",
            layersPrice: "₹ 599"
        },
        {
            layersImg: goldenswirl,
            layerText: "Select your Device",
            layersType: "Golden Swirl",
            layersPrice: "₹ 599"
        },
        {
            layersImg: kid,
            layerText: "Select your Device",
            layersType: "90's Kid",
            layersPrice: "₹ 599"
        },
        {
            layersImg: kindness,
            layerText: "Select your Device",
            layersType: "Cultivate kindness",
            layersPrice: "₹ 599"
        }
    ]

    return (
        <>
            <h1 className='text-center mt-3 mb-3' style={{ fontWeight: "400", borderTop: "1px solid #00000014", padding: "15px" }}>Layers Original Designs</h1>
            <div className='layers'>
                <div className="container">
                    <div className='layers_grid'>
                        {
                            layersData.map((e, i) => {
                                return (
                                    <div key={i} className='layer'>
                                        <NavLink to={"/layercollect"} className="text-decoration-none text-black">
                                            <div className='layer_image'>
                                                <img src={e?.layersImg} alt="" style={{ height: "auto", maxWidth: "100%" }} />
                                                <span className='text-white laye_text'>{e?.layerText}</span>
                                            </div>
                                            <div className='d-flex justify-content-between pt-3 pb-3'>
                                                <span className='layer_text'>{e?.layersType}</span>
                                                <span>{e?.layersPrice}</span>
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './LayersOriginalDesigns.css'
// import blackcart from '../../../../../public/blackcrack-logo.webp'
// import astrorainbow from '../../../../../public/astrorainbow-logo.webp'
// import cyberhud from '../../../../../public/cyberhud-logo.webp'
// import matrix from '../../../../../public/matrix-logo.webp'
// import beforesunset from '../../../../../public/beforesunset-logo.webp'
// import goldenswirl from '../../../../../public/goldenswirl.webp'
// import kid from '../../../../../public/kid-logo.webp'
// import kindness from '../../../../../public/kindness-logo.webp'

// export default function LayersOriginalDesigns() {
//     return (
//         <>
//             <h1 className='text-center mt-3 mb-3' style={{ fontWeight: "400", borderTop: "1px solid #00000014", padding: "15px"}}>Layers Original Designs</h1>
//             <div className='layers'>
//                 <div className="container">
//                     <div className="layers_grid">
//                         <div className="layer">
//                             <NavLink className="text-decoration-none text-black">
//                                 <div className='layer_image'>
//                                     <img src={blackcart} alt="" style={{maxWidth: "100%", height: "auto"}} />
//                                     <span className='text-white laye_text'>Select your Device</span>
//                                 </div>
//                                 <div className='d-flex justify-content-between pt-3 pb-3'>
//                                     <span className='layer_text'>Black Crack</span>
//                                     <span>₹ 599</span>
//                                 </div>
//                             </NavLink>
//                         </div>
//                         <div className="layer">
//                             <NavLink className="text-decoration-none text-black">
//                                 <div className='layer_image'>
//                                     <img src={astrorainbow} alt="" style={{maxWidth: "100%", height: "auto"}} />
//                                     <span className='text-white laye_text'>Select your Device</span>
//                                 </div>
//                                 <div className='d-flex justify-content-between pt-3 pb-3'>
//                                     <span className='layer_text'>Astro Rainbow</span>
//                                     <span>₹ 599</span>
//                                 </div>
//                             </NavLink>
//                         </div>
//                         <div className="layer">
//                             <NavLink className="text-decoration-none text-black">
//                                 <div className='layer_image'>
//                                     <img src={cyberhud} alt="" style={{maxWidth: "100%", height: "auto"}} />
//                                     <span className='text-white laye_text'>Select your Device</span>
//                                 </div>
//                                 <div className='d-flex justify-content-between pt-3 pb-3'>
//                                     <span className='layer_text'>Cyberhud</span>
//                                     <span>₹ 599</span>
//                                 </div>
//                             </NavLink>
//                         </div>
//                         <div className="layer">
//                             <NavLink className="text-decoration-none text-black">
//                                 <div className='layer_image'>
//                                     <img src={matrix} alt="" style={{maxWidth: "100%", height: "auto"}} />
//                                     <span className='text-white laye_text'>Select your Device</span>
//                                 </div>
//                                 <div className='d-flex justify-content-between pt-3 pb-3'>
//                                     <span className='layer_text'>Matrix</span>
//                                     <span>₹ 599</span>
//                                 </div>
//                             </NavLink>
//                         </div>
//                         <div className="layer">
//                             <NavLink className="text-decoration-none text-black">
//                                 <div className='layer_image'>
//                                     <img src={beforesunset} alt="" style={{maxWidth: "100%", height: "auto"}} />
//                                     <span className='text-white laye_text'>Select your Device</span>
//                                 </div>
//                                 <div className='d-flex justify-content-between pt-3 pb-3'>
//                                     <span className='layer_text'>Before Sunset</span>
//                                     <span>₹ 599</span>
//                                 </div>
//                             </NavLink>
//                         </div>
//                         <div className="layer">
//                             <NavLink className="text-decoration-none text-black">
//                                 <div className='layer_image'>
//                                     <img src={goldenswirl} alt="" style={{maxWidth: "100%", height: "auto"}} />
//                                     <span className='text-white laye_text'>Select your Device</span>
//                                 </div>
//                                 <div className='d-flex justify-content-between pt-3 pb-3'>
//                                     <span className='layer_text'>Golden Swirl</span>
//                                     <span>₹ 599</span>
//                                 </div>
//                             </NavLink>
//                         </div>
//                         <div className="layer">
//                             <NavLink className="text-decoration-none text-black">
//                                 <div className='layer_image'>
//                                     <img src={kid} alt="" style={{maxWidth: "100%", height: "auto"}} />
//                                     <span className='text-white laye_text'>Select your Device</span>
//                                 </div>
//                                 <div className='d-flex justify-content-between pt-3 pb-3'>
//                                     <span className='layer_text'>90's Kid</span>
//                                     <span>₹ 599</span>
//                                 </div>
//                             </NavLink>
//                         </div>
//                         <div className="layer">
//                             <NavLink className="text-decoration-none text-black">
//                                 <div className='layer_image'>
//                                     <img src={kindness} alt="" style={{maxWidth: "100%", height: "auto"}} />
//                                     <span className='text-white laye_text'>Select your Device</span>
//                                 </div>
//                                 <div className='d-flex justify-content-between pt-3 pb-3'>
//                                     <span className='layer_text'>Cultivate kindness</span>
//                                     <span>₹ 599</span>
//                                 </div>
//                             </NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
