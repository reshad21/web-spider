import React from 'react';
import { useService } from '../../../Context/ServiceContext';
import Service from './Service';

const ServiceProvide = () => {
    const { services } = useService();
    // console.log(services);

    let content;
    if (services) {
        content = services?.map(service => <Service service={service} key={service.id}></Service>)
        // return content;
    }

    return (
        <div>
            <h1 className='pt-5 text-4xl text-success font-bold'>Services We Provide</h1>
            <div className="divider h-[1px] bg-success opacity-30"></div>
            <div className="mt-2 lg:px-0 grid gap-4 lg:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4 md:gap-4">
                {content}
            </div>
        </div>
    );
};

export default ServiceProvide;