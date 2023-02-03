import React from 'react';
import { Link } from 'react-router-dom';
import flower from '../../../assets/images/sunflower.png';
const PortfolioSection = () => {
    return (
        <div>
            <h1 className='pt-5 font-bold text-4xl text-success'>Our Impressive Portfolio</h1>
            <div className="divider h-[2px] bg-success"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={flower} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci vero voluptates fugit laboriosam eum eveniet alias odio? Modi sit, incidunt aliquam corrupti dignissimos iusto veniam consequatur. Necessitatibus, eaque sed?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={flower} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci vero voluptates fugit laboriosam eum eveniet alias odio? Modi sit, incidunt aliquam corrupti dignissimos iusto veniam consequatur. Necessitatibus, eaque sed?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={flower} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci vero voluptates fugit laboriosam eum eveniet alias odio? Modi sit, incidunt aliquam corrupti dignissimos iusto veniam consequatur. Necessitatibus, eaque sed?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={flower} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci vero voluptates fugit laboriosam eum eveniet alias odio? Modi sit, incidunt aliquam corrupti dignissimos iusto veniam consequatur. Necessitatibus, eaque sed?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={flower} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci vero voluptates fugit laboriosam eum eveniet alias odio? Modi sit, incidunt aliquam corrupti dignissimos iusto veniam consequatur. Necessitatibus, eaque sed?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={flower} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci vero voluptates fugit laboriosam eum eveniet alias odio? Modi sit, incidunt aliquam corrupti dignissimos iusto veniam consequatur. Necessitatibus, eaque sed?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success btn-outline">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 text-center">
                <Link to='/allportfolio' className='btn btn-xl btn-success text-slate-50 hover:bg-inherit hover:border-success font-bold hover:text-success'>Discover More</Link>
            </div>
        </div>
    );
};

export default PortfolioSection;