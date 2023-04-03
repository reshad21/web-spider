import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import services from '../../../assets/servicesData.json';

const ServiceDetails = () => {
    const { id } = useParams();
    // const servicesingle = useLoaderData();
    console.log(id);

    const [serviceDetails, setServiceDetails] = useState([])


    useEffect(() => {
        fetch('servicesData.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    // useEffect(() => {
    //     fetch(`servicesData.json/${id}`)
    //         .then(res => res.json())
    //         .then(data => setServiceDetails(data))
    // }, [id]);

    console.log(serviceDetails);


    return (
        <div className='mx-auto max-w-7xl px-3'>
            <h1>Name:</h1>
            <p>Details:</p>
            <p>About</p>
        </div>
    );
};

export default ServiceDetails;