import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // console.log(service);
    const { serviceName, description, image, id } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className='h-[200px] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>
                        {

                            (description.length > 250) ? <p>{description.slice(0, 120)} ...</p> : description
                        }
                    </p>
                    <div className="card-actions">
                        <Link className="btn btn-success btn-outline" to={`/serviceDetails/${id}/${serviceName}`}>Show More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;