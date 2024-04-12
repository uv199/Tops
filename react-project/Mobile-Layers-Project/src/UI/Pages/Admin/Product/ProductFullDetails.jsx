import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const sizeOptions = [41, 42, 43, 44, 45]

export default function ProductFullDetails({ isOpen, toggle, productDetails }) {
    return (
        <Modal isOpen={isOpen} toggle={toggle} backdrop='static'>
            <ModalHeader toggle={toggle}>Product Details</ModalHeader>
            <ModalBody>
                {
                    productDetails && (
                        <>
                            <div className='text-center p-2'>
                                <img src={productDetails?.thumbnail} alt="" width="200px" height="250px" />
                            </div>
                            <div className='border dark rounded-2'>
                                <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
                                    <div><span className='fw-bold'>Title:-</span> {productDetails?.title}</div>
                                    <div><span className='fw-bold'>Description:-</span> {productDetails?.description}</div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
                                    <div><span className='fw-bold'>Price:-</span> {productDetails?.price}</div>
                                    <div><span className='fw-bold'>Discount:-</span> {productDetails?.discountPercentage || 0} %</div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
                                    <div>
                                        <span className='fw-bold'>Final price:-</span>
                                        {productDetails?.price - ((productDetails?.price * productDetails?.discountPercentage) / 100).toFixed(1) || "not discount"}
                                    </div>
                                    <div><span className="fw-bold">Available Stock:-</span> {productDetails?.availableStock}</div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
                                    <div className='d-flex gap-2 align-items-baseline'>
                                        <span className='fw-bold'>Color</span>
                                        <div className="d-flex gap-2">
                                            {
                                                productDetails?.color?.map((color, i) => {
                                                    return (
                                                        <div key={i} style={{ height: "10px", width: "10px", border: "1px solid black", borderRadius: "50%", background: color }}>{ }</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div><span className="fw-bold">Gender:-</span> {productDetails?.gender}</div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
                                    <div>
                                        <span className="fw-bold">Category:-</span> {productDetails?.category?.map((e)=> e)?.join(" / ")}
                                    </div>
                                    <div><span className='fw-bold'>Rating:-</span> {productDetails?.rating}</div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom dark" style={{ padding: "05px 11px" }}>
                                    <div><span className="fw-bold">Brand:-</span> {productDetails?.brand}</div>
                                    <div className='d-flex gap-2'>
                                        <span className='fw-bold'>Size:-</span>
                                        <div className='d-flex gap-1'>
                                            {
                                                sizeOptions?.map((size, i) => {
                                                    return (
                                                        <div key={i} style={{ border: "1px solid black", padding: "4px 7px", borderRadius: "50%", color: productDetails?.size?.find((e) => e == size) ? "black" : "gray" }}>{size}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </ModalBody>
        </Modal>
    )
}