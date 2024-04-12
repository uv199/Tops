import React, { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './FollowPage.css'
import follow1 from '../../../../../../../public/follow1-logo.jpg'
import follow2 from '../../../../../../../public/follow2-logo.jpg'
import follow3 from '../../../../../../../public/follow3-logo.jpg'
import follow4 from '../../../../../../../public/follow4-logo.jpg'
import follow5 from '../../../../../../../public/follow5-logo.jpg'
import follow6 from '../../../../../../../public/follow6-logo.jpg'
import follow7 from '../../../../../../../public/follow7-logo.jpg'
import follow8 from '../../../../../../../public/follow8-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function FollowPage() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    let followData = [
        {
            followImg: follow1,
            followIcon: faInstagram
        },
        {
            followImg: follow2,
            followIcon: faInstagram
        },
        {
            followImg: follow3,
            followIcon: faInstagram
        },
        {
            followImg: follow4,
            followIcon: faInstagram
        },
        {
            followImg: follow5,
            followIcon: faInstagram
        },
        {
            followImg: follow6,
            followIcon: faInstagram
        },
        {
            followImg: follow7,
            followIcon: faInstagram
        },
        {
            followImg: follow8,
            followIcon: faInstagram
        }
    ]

    return (
        <>
            <h1 className='text-center' style={{ fontWeight: "400", padding: "15px" }}>FOLLOW US ON INSTAGRAM</h1>
            <div className='follow'>
                <div className="follow_grid">
                    {
                        followData.map((e, i) => {
                            return (
                                <div key={i} className='follow_us'>
                                    <a href='https://www.instagram.com/p/C3sVZEJvO0X/' target='_blank' className="text-decoration-none text-black">
                                        <div className='follow_image pb-1'>
                                            <div className='follow_im follow_img'>
                                                <img src={e?.followImg} alt="" style={{ height: "405px", maxWidth: "100%" }} />
                                            </div>
                                            <span className='text-white us_text'>
                                                <FontAwesomeIcon icon={e?.followIcon} />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}