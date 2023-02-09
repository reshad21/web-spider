import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { FaRegComment, FaRegEnvelope, FaRegUser, FaTv, FaViber } from 'react-icons/fa';
const Quote = () => {
    // const serviceid = "service_ywvv4h3"
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ywvv4h3', 'template_3raknwd', form.current, 'gdw7FnmbhlbpG-f2o')
            .then((response) => {
                console.log('SUCCESS!', response.status);
                toast.success('Your Message Successfully Send..!');
                e.target.reset();
            }, (err) => {
                console.log('FAILED...', err);
            });



    }
    return (
        <div className='lg:w-[40%] md:w-[40%]'>
            <div className="divider h-[3px] bg-success"></div>
            <h1 className='text-4xl font-bold pl-5 text-[#2f2f2fc9]'>Get a Free Quote</h1>

            <form className="card-body" ref={form} onSubmit={sendEmail}>

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaRegUser />
                    </label>
                    <input type="text" name='user_name' placeholder="Name" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" />
                </div>

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaRegEnvelope />
                    </label>
                    <input type="email" name='user_email' placeholder="Email" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" />
                </div>

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaViber />
                    </label>
                    <input type="text" name='user_phone' placeholder="Phone" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" />
                </div>

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaTv />
                    </label>
                    <input type="text" name='user_website' placeholder="Website" className="input input-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" />
                </div>

                <div className="form-control relative">
                    <label className="label absolute top-2">
                        <FaRegComment />
                    </label>
                    <textarea name='message' className="textarea textarea-bordered pl-8 border-t-0 border-r-0 border-l-0 rounded-none outline-0 focus:outline-0" placeholder="Message"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-success btn-outline">Send Us</button>
                </div>
            </form>
        </div>
    );
};

export default Quote;