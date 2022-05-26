import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('review.json')
        .then(res=> res.json())
        .then(data => setReviews(data))

    }, [])
    return (
        <div>
            <h1 className='text-5xl  text-center text-primary font-bold mt-10'>Reviews</h1> 

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
               {
                   reviews.map(review=><Review
                   key={review._id}
                   review={review}
                   ></Review>)
               }
           </div>

        </div>
    );
};

export default Reviews;