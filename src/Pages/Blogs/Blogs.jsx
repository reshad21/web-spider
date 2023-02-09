import React from 'react';
import blog from '../../assets/images/sunflower.png';
const Blogs = () => {
    return (
        <div className='mx-auto max-w-7xl px-3 py-5'>
            <div className="grid lg:grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:gap-5 md:gap-3 sm:gap-3">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={blog} alt="Shoes" className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lorem ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem illo dolorum excepturi, quo, deleniti officiis minima sapiente iure quae error. Amet, dignissimos? Quidem ipsam aut ullam, ad commodi voluptate!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={blog} alt="Shoes" className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lorem ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem illo dolorum excepturi, quo, deleniti officiis minima sapiente iure quae error. Amet, dignissimos? Quidem ipsam aut ullam, ad commodi voluptate!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={blog} alt="Shoes" className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lorem ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem illo dolorum excepturi, quo, deleniti officiis minima sapiente iure quae error. Amet, dignissimos? Quidem ipsam aut ullam, ad commodi voluptate!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={blog} alt="Shoes" className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lorem ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem illo dolorum excepturi, quo, deleniti officiis minima sapiente iure quae error. Amet, dignissimos? Quidem ipsam aut ullam, ad commodi voluptate!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={blog} alt="Shoes" className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lorem ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore exercitationem illo dolorum excepturi, quo, deleniti officiis minima sapiente iure quae error. Amet, dignissimos? Quidem ipsam aut ullam, ad commodi voluptate!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;