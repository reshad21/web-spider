import React from 'react';

const Service = ({ service }) => {
    console.log(service);
    const { serviceName, description, img } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className='h-[200px] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;