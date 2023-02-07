import React from 'react';
import ChoseWhy from './ChoseWhy/ChoseWhy';
import Quote from './Quote/Quote';

const ReasonforChose = () => {
    return (
        <div className="mt-14">
            <h1 className='pt-5 text-4xl text-success font-bold'>Reasons for Choosing Us</h1>
            <div className="divider h-[1px] bg-success opacity-30"></div>
            <div className='flex-row gap-4 lg:flex md:flex lg:gap-4 md:gap-4'>
                <ChoseWhy></ChoseWhy>
                <Quote></Quote>
            </div>
        </div>
    );
};

export default ReasonforChose;