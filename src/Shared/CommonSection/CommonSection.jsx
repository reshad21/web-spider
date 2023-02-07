import React from 'react';

const CommonSection = ({ className, children }) => {
    return (
        <div>
            <h1 className={className}>{children}</h1>
            <div className="divider h-[1px] bg-success opacity-30"></div>
        </div>
    );
};

export default CommonSection;