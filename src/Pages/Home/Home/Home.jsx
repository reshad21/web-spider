import React from 'react';
import Members from '../Members/Members';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import ReasonforChose from '../ReasonforChose/ReasonforChose';
import ReviewSection from '../ReviewSection/ReviewSection';
import ServiceProvide from '../ServiceProvide/ServiceProvide';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='mx-auto max-w-7xl px-3'>
            <Slider></Slider>
            <ServiceProvide></ServiceProvide>
            <PortfolioSection></PortfolioSection>
            <Members></Members>
            <ReasonforChose></ReasonforChose>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;