import React from 'react';
import picture from '../../../assets/images/sunflower.png';
import './reviewSlider.css';
import SingleReview from './SingleReview';

const ReviewSection = () => {
    const reviews = [
        {
            id: 1,
            img: picture,
            name: 'Anna Haniball, Facebook',
            message: 'Your brand is how your customers see an your business. It’s shaped by the way you represent yourself – professiona, socially and visually. It’s what makes you unique.'
        },
        {
            id: 2,
            img: picture,
            name: 'Jowakim Law, Linkedin',
            message: 'Your brand is how your customers see an your business. It’s shaped by the way you represent yourself – professiona, socially and visually. It’s what makes you unique.'
        },
        {
            id: 3,
            img: picture,
            name: 'Kukhhen Kakkin, UpWork',
            message: 'Your brand is how your customers see an your business. It’s shaped by the way you represent yourself – professiona, socially and visually. It’s what makes you unique.'
        },
    ]

    return (
        <div className='mb-5'>
            <h1 className='pt-5 text-4xl text-success font-bold'>Meet Our Happy Customers</h1>
            <div className="divider h-[1px] bg-success opacity-30"></div>
            <div className="grid lg:grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    reviews?.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default ReviewSection;