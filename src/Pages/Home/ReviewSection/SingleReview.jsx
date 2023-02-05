import React from 'react';

import { FaStar } from 'react-icons/fa';
import img from '../../../assets/images/sunflower.png';
const SingleReview = () => {
    return (
        <div>
            <div className="card w-86 bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={img} alt="" className='w-[100px] h-[100px] rounded-full' />
                    <h2 className="card-title">Anna Haniball, Facebook</h2>
                    <ul className='flex gap-1'>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                        <li><FaStar className='inline-block text-yellow-500' /></li>
                    </ul>
                    <p>Your brand is how your customers see an your business. It’s shaped by the way you represent yourself – professiona, socially and visually. It’s what makes you unique.</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;