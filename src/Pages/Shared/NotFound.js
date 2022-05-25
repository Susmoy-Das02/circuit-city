import React from 'react';
import notFoundPic from '../../assets/images/NotFoundPic.png';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center'>Page Not Found</h2>
            <img className='w-100' src={notFoundPic} alt="" />
        </div>
    );
};

export default NotFound;
