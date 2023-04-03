import React from 'react';
import { useParams } from 'react-router-dom';
import { useService } from '../../../Context/ServiceContext';
// import services from '../../../assets/servicesData.json';

const ServiceDetails = () => {
    const { id } = useParams();
    const { services } = useService();

    let foundData;
    if (services) {
        foundData = services.find((service) => service.id === parseInt(id));
    }

    return (
        <div className='mx-auto max-w-7xl px-3'>
            {foundData && (
                <>
                    <h1>Name: {foundData.serviceName}</h1>
                    <p>Details: {foundData.description}</p>
                    <img src={foundData.image} alt="" />
                </>
            )}
        </div>
    );
};

export default ServiceDetails;