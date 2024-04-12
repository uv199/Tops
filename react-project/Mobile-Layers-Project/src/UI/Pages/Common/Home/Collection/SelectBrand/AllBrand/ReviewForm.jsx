import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

export default function ReviewForm({ addReview }) {
    const [title, setTitle] = useState({
        name: "",
        email: "",
        title: "",
        rating: 0,
        description: "",
    })
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // Submit Handler
    const handlerSubmit = (e) => {
        e?.preventDefault()
        if (title?.name && title?.email && title?.title && title?.rating > 0 && title?.description) {
            addReview(title)
            toggle(false)
        } else {
            alert('Please fill out all required fields')
        }
    }

    // Reset Handler
    const handlerReset = () => {
        setTitle({
            name: "",
            email: "",
            title: "",
            rating: 0,
            description: "",
        })
    }

    // Rating Change Handler
    const handleRatingChange = (newRating) => {
        setTitle({ ...title, rating: newRating })
    }

    // Generate star icons based on the current rating
    const renderStars = () => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={i <= title?.rating ? solidStar : regularStar}
                    onClick={() => handleRatingChange(i)}
                    style={{ cursor: 'pointer', color: i <= title?.rating ? 'gold' : 'grey' }}
                />
            )
        }
        return stars
    }

    return (
        <>
            <Button color="white" onClick={toggle} className='border border-1 dark p-2 shadow'>
                <FontAwesomeIcon icon={faPenToSquare} /> Write a Review
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Review</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handlerSubmit}>
                        <FormGroup>
                            <Label>Name<span style={{ color: "red" }}>*</span></Label>
                            <Input type='text' value={title?.name} placeholder='Enter your Name' onChange={(e) => setTitle({ ...title, name: e?.target?.value })} required style={{ boxShadow: "none", border: "2px solid #dee2e6" }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email<span style={{ color: "red" }}>*</span></Label>
                            <Input type='text' value={title?.email} placeholder='Enter your Email' onChange={(e) => setTitle({ ...title, email: e?.target?.value })} required style={{ boxShadow: "none", border: "2px solid #dee2e6" }} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Title of Review<span style={{ color: "red" }}>*</span></Label>
                            <Input
                                type="text"
                                value={title?.title}
                                placeholder='Give Your review a title'
                                onChange={(e) => setTitle({ ...title, title: e?.target?.value })}
                                required
                                style={{ boxShadow: "none", border: "2px solid #dee2e6" }}
                            />
                        </FormGroup>
                        <FormGroup className='d-flex gap-4 align-items-center pb-3 pt-3'>
                            <Label className='m-0'>Rating<span style={{ color: 'red' }}>*</span></Label>
                            <div className='d-flex gap-3 align-items-center'>
                                {renderStars()}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label>How was your overall experience?<span style={{ color: "red" }}>*</span></Label>
                            <Input
                                type='textarea'
                                value={title?.description}
                                required
                                onChange={(e) => setTitle({ ...title, description: e?.target?.value })}
                                style={{ boxShadow: "none", border: "2px solid #dee2e6" }}
                            />
                        </FormGroup>
                        <div className='text-center'>
                            <Button color='success' className='me-4'>Submit</Button>
                            <Button color='warning' onClick={() => handlerReset()}>Reset</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}
