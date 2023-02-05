import React from 'react';
import { FaDollarSign, FaRegUser } from 'react-icons/fa';
import { MdAssistantPhoto } from "react-icons/md";
const ChoseWhy = () => {
    return (
        <div className='lg:w-[60%] md:w-[60%]'>
            <h1 className='text-4xl font-bold'>We Lead from the Front</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <ul className='my-5'>
                <li><FaRegUser className='inline-block' /> Expert guidance to build your start-up.</li>
                <li><FaDollarSign className='inline-block' /> Save time, resource and money!</li>
                <li><MdAssistantPhoto className='inline-block' /> Create endless business possibilities!</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        </div>
    );
};

export default ChoseWhy;