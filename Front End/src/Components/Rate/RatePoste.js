import React from 'react'
import ReactStars from "react-rating-stars-component";

const RatePoste = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div>
            <div className='d-flex flex-row'>
                <h4 className='fs-5 mt-2 Nom-comment'> Hamza Aglagal </h4>
                <div className='mb-2'>
                    <ReactStars
                        count={5}
                        size={25}
                        color="#979797"
                        activeColor="#ffc107"
                        value={7.5}
                        ally={true}
                        isHalf={true}
                        onChange={ratingChanged}
                        emptyIcon={<i class="fa-sharp fa-solid fa-stars"></i>}
                        halfIcon={<i class="fa-duotone fa-star-half-stroke"></i>}
                        fullIcon={<i class="fa-solid fa-star"></i>}
                    />
                </div>
            </div>
            <div className='Comment-input d-flex flex-column'>
                <input type='text' />
                <button className='bg-dark text-white p-2'> أضف تعليق </button>
            </div>
        </div>
    )
}

export default RatePoste