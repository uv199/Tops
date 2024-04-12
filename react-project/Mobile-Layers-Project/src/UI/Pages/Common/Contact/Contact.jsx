import React, { useLayoutEffect } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import './Contact.css'

export default function Contact() {
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    })
    
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="contact_flex d-flex">
                        <div className="contact_head">
                            <h1>Contact</h1>
                            <div className='border-bottom border-3 border-black' style={{width: "10%", marginLeft: "60px"}}></div>
                        </div>
                        <div className="contact_us">
                            <h3>Write us a message</h3>
                            <Form>
                                <FormGroup>
                                    <Input type='text' placeholder='Name' />
                                </FormGroup>
                                <FormGroup>
                                    <Input type='text' placeholder='Email' />
                                </FormGroup>
                                <FormGroup>
                                    <Input type='textarea' placeholder='Message' />
                                </FormGroup>
                                <Button>Send</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
