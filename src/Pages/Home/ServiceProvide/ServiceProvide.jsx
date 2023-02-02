import React from 'react';
import business from '../../../assets/images/business.jpg';
import design from '../../../assets/images/design.png';
import development from '../../../assets/images/development.png';
import OnlineMarketing from '../../../assets/images/onlinemarket.png';
import technology from '../../../assets/images/technology.jpg';
import Service from './Service';

const ServiceProvide = () => {
    const services = [
        {
            id: 1,
            serviceName: 'Design',
            description: 'We design professional looking yet simple website. Our designs are search engine and user friendly',
            img: design
        },
        {
            id: 2,
            serviceName: 'Development',
            description: 'We design professional looking yet simple website. Our designs are search engine and user friendly',
            img: development
        },
        {
            id: 3,
            serviceName: 'Online Marketing',
            description: 'We design professional looking yet simple website. Our designs are search engine and user friendly',
            img: OnlineMarketing
        },
        {
            id: 4,
            serviceName: 'Business',
            description: 'We design professional looking yet simple website. Our designs are search engine and user friendly',
            img: business
        },
        {
            id: 5,
            serviceName: 'Technology',
            description: 'We design professional looking yet simple website. Our designs are search engine and user friendly',
            img: technology
        },
    ]

    return (
        <div>
            <h1 className='py-5 font-semibold text-4xl text-success'>Services We Provide</h1>
            <div className="mt-2 lg:px-0 grid gap-4 lg:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4 md:gap-4">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceProvide;