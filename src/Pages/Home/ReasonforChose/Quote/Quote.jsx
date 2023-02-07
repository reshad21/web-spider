import React from 'react';
import { FaRegComment, FaRegEnvelope, FaRegUser, FaTv, FaViber } from 'react-icons/fa';

const Quote = () => {
    return (
        <div className='lg:w-[40%] md:w-[40%]'>
            <div className="divider h-[3px] bg-success"></div>
            <h1 className='text-4xl font-bold pl-5 text-[#2f2f2fc9]'>Get a Free Quote</h1>
            <div className="card-body">

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaRegUser />
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" />
                </div>

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaRegEnvelope />
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" />
                </div>

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaViber />
                    </label>
                    <input type="text" placeholder="Phone" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" />
                </div>

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaTv />
                    </label>
                    <input type="text" placeholder="Website" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" />
                </div>

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaRegComment />
                    </label>
                    <textarea className="textarea textarea-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" placeholder="Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-success btn-outline">Send Us</button>
                </div>
            </div>
        </div>
    );
};

export default Quote;