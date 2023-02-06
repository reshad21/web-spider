import React from 'react';
import { FaStar } from 'react-icons/fa';
const SingleReview = ({ review }) => {
    const { img, name, message } = review;
    return (
        <div>
            <div className="card w-86 bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={img} alt="" className='w-[100px] h-[100px] rounded-full' />
                    <h2 className="card-title">{name}</h2>
                    <ul className='flex gap-1'>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                    </ul>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;