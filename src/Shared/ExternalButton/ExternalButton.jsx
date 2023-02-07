import React from 'react';

const ExternalButton = ({ href, target, children }) => {
    return (
        <a href={href} target={target}>
            <button className=' text-emerald-700 font-bold'>{children}</button>
        </a>
    );
};

export default ExternalButton;