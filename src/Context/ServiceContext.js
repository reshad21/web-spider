import React, { createContext, useContext, useEffect, useState } from 'react';

export const SERVICE_CONTEXT = createContext();

const ServiceContext = ({ children }) => {

    const [services,setService] = useState([]);
    useEffect(()=>{
        fetch('servicesData.json')
        .then(res=>res.json())
        .then(data=>setService(data))
        .catch((error)=>console.log(error))
    },[])

    

    const value ={
        services,
        setService,
    }

    console.log(value.services);

    return (
        <SERVICE_CONTEXT.Provider value={value}>{children}</SERVICE_CONTEXT.Provider>
    );
};

export const useService = ()=>{
    const context = useContext(SERVICE_CONTEXT);
    return context;
}

export default ServiceContext;