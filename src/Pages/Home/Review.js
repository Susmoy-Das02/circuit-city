import React from 'react';

const Review = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-green-500">{name}</h2>
                <p>{description}</p>
                <p className='text-rose-500'>rating: {rating}</p>
            </div>
        </div>
    );
};

export default Review;