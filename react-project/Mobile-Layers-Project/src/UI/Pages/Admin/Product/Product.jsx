import React, { useState } from 'react'
import { Button } from 'reactstrap'
import ProductFullDetails from './ProductFullDetails'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import { intialProduct } from '../../../../Utils/intialState'

export default function Product() {
    const [product, setProduct] = useState(intialProduct)
    const [allProduct, setAllProduct] = useState([])
    const [modal, setModal] = useState(false)
    const [refetch, setRefetch] = useState(true)
    const [updateMode, setUpdateMode] = useState(false)
    const [detailModal, setDetailModal] = useState(false)
    const [selectedProductDetails, setSelectedProductDetails] = useState(null)
    const refetchData = () => setRefetch(!refetch)

    // TOGGLE HANDLER
    const toggle = () => {
        setModal(!modal)
        setUpdateMode(false)
        setProduct(intialProduct)
    }

    return (
        <>
            <div className='d-flex gap-2 justify-content-end me-4 mt-2 mb-3'>
                <Button color="danger" onClick={toggle}>New Product</Button>
            </div>

            <ProductForm intialProduct={intialProduct} product={product} toggle={toggle} modal={modal} updateMode={updateMode} setProduct={setProduct} setAllProduct={setAllProduct} refetch={refetch} refetchData={refetchData} />

            <ProductTable setProduct={setProduct} allProduct={allProduct} refetchData={refetchData} toggle={toggle} setUpdateMode={setUpdateMode} setSelectedProductDetails={setSelectedProductDetails} setDetailModal={setDetailModal} refetch={refetch} setAllProduct={setAllProduct} product={product} />

            <ProductFullDetails isOpen={detailModal} toggle={() => setDetailModal(false)} productDetails={selectedProductDetails} />
        </>
    )
}