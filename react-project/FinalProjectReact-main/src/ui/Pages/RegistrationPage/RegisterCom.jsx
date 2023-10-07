import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default function RegisterCom() {

    return (
        <>
            <div className="div d-flex justify-content-center">
                <Form>
                    <h2 className='pb-4' style={{ textAlign: 'center' }}><strong>Registration Form</strong></h2>
                    <FormGroup>
                        <Label for="exampleName">
                            Name
                        </Label>
                        <Input
                            id="exampleName"
                            name="name"
                            placeholder="Enter your fullname"
                            style={{ width: '500px' }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            style={{ width: '500px' }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            style={{ width: '500px' }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">
                            Address
                        </Label>
                        <Input
                            id="exampleAddress"
                            name="address"
                            placeholder="1234 Main St"
                            style={{ width: '500px' }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress2">
                            Address 2
                        </Label>
                        <Input
                            id="exampleAddress2"
                            name="address2"
                            placeholder="Apartment, studio, or floor"
                            style={{ width: '500px' }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleCity">
                            City
                        </Label>
                        <Input
                            id="exampleCity"
                            name="city"
                            style={{ width: '200px' }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePincode">
                            Pincode
                        </Label>
                        <Input
                            id="examplePincode"
                            name="pincode"
                            style={{ width: '200px' }}
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            id="exampleCheck"
                            name="check"
                            type="checkbox"
                        />
                        <Label
                            check
                            for="exampleCheck"
                        >
                            Check me out
                        </Label>
                    </FormGroup>
                    <Button style={{ height: '55px', width: '480px', backgroundColor: '#FF3F6C', fontSize: '20px', fontWeight: 'bold', border: 'none', borderRadius: 0, backgroundColor: '#5FB255' }}>
                        SIGN IN
                    </Button>
                </Form>
            </div >
        </>
    )
}
