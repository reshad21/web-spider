import React from 'react';
import './reviewSlider.css';
import SingleReview from './SingleReview';

const ReviewSection = () => {

    return (
        <div>
            <h1 className='pt-5 text-4xl text-success font-bold'>Meet Our Happy Customers</h1>
            <div className="divider h-[1px] bg-success opacity-30"></div>
            <div className="grid lg:grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                <SingleReview></SingleReview>
                <SingleReview></SingleReview>
                <SingleReview></SingleReview>
            </div>

        </div>
    );
};

export default ReviewSection;