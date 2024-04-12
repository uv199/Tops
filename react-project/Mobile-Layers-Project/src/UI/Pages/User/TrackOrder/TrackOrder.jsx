import React, { useLayoutEffect } from 'react'
import { Form, Button, Input, FormGroup, Label } from 'reactstrap'
import './TrackOrder.css'

export default function TrackOrder() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <div className='w-50 text-center m-auto ps-5 pe-5'>
                <h1 className='heading'>Track Order</h1>
                <Form autoComplete='off'>
                    <FormGroup tag="fieldset" className='d-flex justify-content-center align-items-center gap-5'>
                        <FormGroup check>
                            <Input className='checkbox' name="radio1" type="radio" checked={true} />
                            <Label check>Track ID</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input className='checkbox' name="radio1" type="radio" />
                            <Label check>Order ID</Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder="Enter Id" type="text" className='text' />
                    </FormGroup>
                    <Button className='bg-black ps-5 pe-5' style={{marginBottom: "110px"}}>Track</Button>
                </Form>
            </div>
        </>
    )
}
