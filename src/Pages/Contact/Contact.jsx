import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaRegComment, FaRegEnvelope, FaRegUser, FaTv, FaTwitter, FaViber, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { Link } from 'react-router-dom';
import CommonSection from '../../Shared/CommonSection/CommonSection';
const Contact = () => {
    return (
        <div className='mx-auto max-w-7xl px-3'>
            <CommonSection className='pt-5 text-4xl text-success font-bold'>Send Us A Message</CommonSection>
            <div className="lg:flex md:flex gap-5  p-4 md:gap-7">
                <div className='lg:w-[70%] md:w-[60%]'>
                    <form className="">

                        <div className="lg:flex md:flex justify-between gap-8 mb-5">
                            <div className="form-control relative w-full mb-5 lg:mb-0 md:mb-0">
                                <label className="label absolute top-2">
                                    <FaRegUser />
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0 bg-inherit" />
                            </div>

                            <div className="form-control relative w-full">
                                <label className="label absolute top-2">
                                    <FaRegEnvelope />
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0 bg-inherit" />
                            </div>
                        </div>

                        <div className="lg:flex md:flex justify-between gap-8 mb-5">
                            <div className="form-control relative w-full mb-5 lg:mb-0 md:mb-0">
                                <label className="label absolute top-2">
                                    <FaViber />
                                </label>
                                <input type="text" placeholder="Phone" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0 bg-inherit" />
                            </div>

                            <div className="form-control relative w-full">
                                <label className="label absolute top-2">
                                    <FaTv />
                                </label>
                                <input type="text" placeholder="Website" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0 bg-inherit" />
                            </div>
                        </div>

                        <div className="form-control justify-between relative">
                            <label className="label absolute top-2">
                                <FaRegComment />
                            </label>
                            <textarea className="textarea textarea-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0 bg-inherit" placeholder="Message"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-success btn-outline">Contact Us</button>
                        </div>
                    </form>
                </div>
                <div className="lg:w-[30%] md:w-[40%]">
                    <div className="px-4 py-3 border-2 border-success mb-3 flex items-center gap-4">
                        <div className="w-1/5 border-r-2 border-success">
                            <HiOutlinePhone className='inline-block text-5xl text-success' />
                        </div>
                        <div className="">
                            <p className='text-[#444444] font-semibold text-2xl'>Give us a call</p>
                            <span className='text-[#444444]'>(123) 456 7890</span>
                        </div>
                    </div>
                    <div className="px-4 py-3 border-2 border-success mb-3 flex items-center gap-4">
                        <div className="w-1/5 border-r-2 border-success">
                            <HiOutlineMail className='inline-block text-5xl text-success' />
                        </div>
                        <div className="">
                            <p className='text-[#444444] font-semibold text-2xl'>Send an email</p>
                            <span className='text-[#444444]'>yourcompany@sample.com</span>
                        </div>
                    </div>
                    <div className="px-4 py-3 border-2 border-success mb-3 flex items-center justify-center text-success gap-1">
                        <a href='https://www.facebook.com/WebSpiderBD247' className='text-2xl'><FaFacebook /></a>
                        <Link to='/' className='text-2xl'><FaTwitter /></Link>
                        <Link to='/' className='text-2xl'><FaYoutube /></Link>
                        <Link to='/' className='text-2xl'><FaInstagram /></Link>
                        <Link to='/' className='text-2xl'><FaLinkedin /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;