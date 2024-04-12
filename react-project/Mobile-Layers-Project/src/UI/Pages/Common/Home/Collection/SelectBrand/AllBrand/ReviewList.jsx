import React from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

export default function ReviewList({ productId, reviews, deleteReview }) {
    console.log("-----------  reviews----------->", reviews)
    const renderStars = (rating) => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(<FontAwesomeIcon icon={i <= rating ? solidStar : regularStar} className={i <= rating ? 'text-warning' : 'text-secondary'} />)
        }
        return stars
    }

    // Filter reviews based on the product ID
    const filteredReviews = reviews?.filter((review) => review?.productId === productId)

    return (
        <>
            <h2 className='mt-3'>Reviews</h2>
            <div className='border-bottom border-black border-2 mb-4 ms-3' style={{ width: "15%" }}></div>
            {
                filteredReviews?.length > 0 ?
                    <div style={{ overflowY: "scroll", border: "1px solid #dee2e6", padding: "10px", height: "170px" }}>
                        {
                            filteredReviews?.map((review, index) => (
                                <div key={index} style={{ padding: "7px", border: "1px solid #dee2e6", margin: "7px" }} className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <div>
                                            <span className='fw-bold'>Name : </span>
                                            {review?.name}
                                        </div>
                                        <div>
                                            <span className='fw-bold'>Email : </span>
                                            {review?.email}
                                        </div>
                                        <div>
                                            <span className='fw-bold'>Title : </span>
                                            {review?.title}
                                        </div>
                                        {
                                            review?.description &&
                                            <div>
                                                <span className='fw-bold'>Description : </span>
                                                {review?.description}
                                            </div>
                                        }
                                        <div>
                                            <span className='fw-bold'>Rating : </span>
                                            {renderStars(review?.rating)}
                                        </div>
                                    </div>
                                    <Button className="btn btn-danger btn-sm mt-2" onClick={() => deleteReview(index)} style={{ height: "30px" }}>
                                        Delete
                                    </Button>
                                </div>
                            ))
                        }
                    </div> :
                    <span></span>
            }
        </>
    )
}
