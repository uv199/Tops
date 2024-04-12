import axios from 'axios'
import { Eye, PencilRuler, Search, Slash, Trash } from 'lucide-react'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Input, Label, Table } from 'reactstrap'
import { BE_URL } from '../../../../Config'
import ReactPaginate from 'react-paginate'
const sizeOptions = [41, 42, 43, 44, 45]
const selectOption = [10, 15, 20, 25, 30]
import './Product.css'
let img = "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg"

export default function ProductTable({ product, setProduct, allProduct, refetchData, toggle, setUpdateMode, setSelectedProductDetails, setDetailModal, setAllProduct, refetch }) {
    const [paginate, setPaginate] = useState({
        limit: 10,
        page: 0,
        totalProduct: 0,
    })
    const [selectedLimit, setSelectedLimit] = useState(10) // Default selected limit
    const [search, setSearch] = useState("")

    // SCROLL HANDLER
    useLayoutEffect(() => {
        window?.scrollTo(0, 0)
    })

    // USEEFFECT HANDLER
    useEffect(() => {
        console.log("------->");
        axios({
            method: "get",
            url: BE_URL + "/product/getAllPaginate",
            params: {
                limit: paginate?.limit,
                page: paginate?.page + 1,
                search: search,
            }
        })?.then((res) => {
            // console.log("========res_data", res?.data)
            setAllProduct(res?.data?.data)
            setPaginate({ ...paginate, totalProduct: res?.data?.count })
        })?.catch((err) => {
            toast.error(err)
        })
    }, [refetch, paginate?.page, selectedLimit])

    // DELETE HANDLER
    const deleteHandler = (id) => {
        // console.log("delete product id", id)
        axios({
            method: "delete",
            url: BE_URL + `/product/delete/${id}`,
            data: product,
        })?.then((res) => {
            toast.success("Product Delete...!")
            if (allProduct?.length === 1) {
                setPaginate({ ...paginate, page: paginate?.page - 1 })
            }
            refetchData()
        })?.catch((err) => {
            toast.error(err)
        })
    }

    // EDIT HANDLER
    const editHandler = (data) => {
        // console.log("update product id", data)
        toggle()
        setProduct(data)
        setUpdateMode(true)
    }

    // PREVIEW HANDLER
    const previewHandler = (id) => {
        axios({
            method: "get",
            url: BE_URL + `/product/getProductById/${id}`,
        })?.then((res) => {
            // console.log(res?.data?.data)
            setSelectedProductDetails(res?.data?.data)
            setDetailModal(true)
        })?.catch((err) => {
            toast.error(err)
        })
    }

    // handlePageClick Handler
    const handlePageClick = (e) => {
        setPaginate({ ...paginate, page: e?.selected })
        refetchData()
    }

    // Custom function to add leading zero
    const addZeroHandler = (num) => {
        return num < 10 ? `0${num}` : num
    }

    // Handler for changing the selected limit
    const handleLimitChange = (e) => {
        const newLimit = parseInt(e?.target?.value)
        setSelectedLimit(newLimit)
        setPaginate({ ...paginate, limit: newLimit }) // Reset page to 1 when changing limit
    }

    // SEARCH DATA HANDLER WITH DEBOUNCE
    const searchHandler = (e) => {
        setSearch(e?.target?.value);
    }

    // MODIFY SEARCH HANDLER TO USE THE DEBOUNCED FUNCTION
    useEffect(() => {
        const searchDelay = setTimeout(() => {
            refetchData()
        }, 1000)
        return () => clearTimeout(searchDelay)
    }, [search])

    return (
        <>
            <div style={{ margin: "10px 50px", border: "1px solid gray", padding: "20px", borderRadius: "10px" }}>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    {/* Search options for pagination */}
                    <div className='d-flex align-items-center'>
                        <Input placeholder='Search Here...' className="input-group" style={{ boxShadow: "none", border: "1px solid #dee2e6", borderTopRightRadius: "0%", borderBottomRightRadius: "0%" }} onChange={(e) => searchHandler(e)} />
                        <Label className='input-group-text m-0' style={{ borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%", backgroundColor: "transparent", border: "1px solid #dee2e6" }}>
                            <Search />
                        </Label>
                    </div>
                    <h1 className='text-center m-0' style={{ flex: "1" }}>Product Table</h1>

                    {/* Select options for pagination limit */}
                    <Input type="select" value={selectedLimit} onChange={handleLimitChange} style={{ flex: "0.20", boxShadow: "none", border: "1px solid #dee2e6" }}>
                        {
                            selectOption?.map((option, i) => (
                                <option key={i} value={option}>{option}</option>
                            ))
                        }
                    </Input>
                </div>

                <Table className='border dark text-center'>
                    <thead>
                        <tr>
                            {
                                ["Sr.no", "Image", "Name", "Price", "Color", "Size", "Action"]?.map((e, i) => {
                                    return (
                                        <th key={i}>{e}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProduct?.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td> {addZeroHandler(paginate?.page === 0 ? i + 1 : (i + (paginate?.page * paginate?.limit) + 1))}</td>
                                        <td>
                                            <img src={e?.thumbnail || img} alt="" height="30px" />
                                        </td>
                                        <td>{e?.title}</td>
                                        <td>₹ {e?.price}</td>
                                        <td>
                                            <div className="d-flex gap-2 justify-content-center">
                                                {
                                                    e?.color.map((color, i) => {
                                                        return (
                                                            <div key={i} style={{ height: "10px", width: "10px", border: "1px solid black", borderRadius: "50%", backgroundColor: color }}></div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex gap-2 justify-content-center">
                                                {
                                                    sizeOptions?.map((size, i) => {
                                                        return (
                                                            <div key={i} style={{ border: "1px solid black", padding: "6px", color: e?.size?.find((e) => e == size) ? "black" : "gray" }}>{size}</div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <PencilRuler role='button' color="#81adef" onClick={() => editHandler(e)} />
                                            <Slash style={{ rotate: "-21deg" }} />
                                            <Trash role='button' color="#f22b2b" onClick={() => deleteHandler(e?._id)} />
                                            <Slash style={{ rotate: "-21deg" }} />
                                            <Eye role='button' color='#81adee' onClick={() => previewHandler(e?._id)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

                <ReactPaginate className='d-flex gap-3 align-items-center list-unstyled justify-content-evenly text-white bg-info fs-5' previousLinkClassName='prev_link' nextLinkClassName='next_link' breakLabel="..." nextLabel=">" pageRangeDisplayed={5} pageCount={paginate?.totalProduct / paginate?.limit} previousLabel="<" renderOnZeroPageCount={null} onPageChange={handlePageClick} activeClassName="active_class" />
            </div>
        </>
    )
}
