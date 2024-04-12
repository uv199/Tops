import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './AllBrand.css'
import { toast } from 'react-toastify'
import { BE_URL } from '../../../../../../../Config'

export default function AllBrand() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState({})

    let location = useLocation()

    // USEEFFECT HANDLER
    useEffect(() => {
        // console.log("----->")
        axios({
            method: "get",
            url: BE_URL + "/product/getAll",
            params: { ...filter, brand: location?.state?.brand }
        })?.then((res) => {
            // console.log(res?.data)
            setData(res?.data?.data)
        })?.catch((err) => {
            toast.error(err)
        })
    }, [filter, location])



    return (
        <>
            <div className='d-flex gap-3 ms-5 ps-4 pt-3 pb-3 collection'>
                <NavLink to={"/"} className="text-decoration-none home" style={{ color: "black", opacity: "0.58" }}>Home</NavLink>
                <div style={{ opacity: "0.58" }}>/</div>
                <div>Collection</div>
                <div style={{ opacity: "0.58" }}>/</div>
                <div style={{ opacity: "0.58" }}>{location?.state?.brand}</div>
            </div>
            <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.08)" }}></div>
            <h1 className='ps-5 pt-4 pb-4' style={{ fontWeight: "400" }}>{location?.state?.brand}</h1>
            <div className='apple'>
                <div className='apple_grid'>
                    {
                        data?.map((e, i) => {
                            return (
                                <div key={i} className='apple_box' onClick={() => previewHandler(e?._id)}>
                                    <NavLink to={`/productDetail/${e?._id}`} state={e} className="text-decoration-none text-black">
                                        <div className='apple_image'>
                                            <img src={e?.thumbnail} alt="" style={{ height: "100%", width: "50%" }} />
                                        </div>
                                        <div style={{ padding: "30px 30px 30px 30px" }}>
                                            <span className='apple_text'>{e?.title}</span>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
