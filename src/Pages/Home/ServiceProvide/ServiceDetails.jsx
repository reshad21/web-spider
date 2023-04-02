import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../../../assets/servicesData.json';

const ServiceDetails = () => {
    const { id } = useParams();
    // const product = useLoaderData();
    console.log(id, services);

    // const [serviceDetails, setServiceDetails] = useState([])

    // useEffect(() => {
    //     async function fetchUser() {
    //         const response = await fetch(`../assets/servicesData.json/${id}`);
    //         const data = await response.json();
    //         setServiceDetails(data);
    //     }
    //     fetchUser();
    // }, [id]);

    // console.log(serviceDetails);


    return (
        <div className='mx-auto max-w-7xl px-3'>
            <h1>Name:</h1>
            <p>Details:</p>
            <p>About</p>
        </div>
    );
};

export default ServiceDetails;