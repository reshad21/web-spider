import React from 'react';
import { Outlet } from 'react-router-dom';
import DashMenu from '../Pages/Dashbord/DashShared/DashMenu/DashMenu';
import Footer from '../Shared/Footer/Footer';

const DashbordLayout = () => {
    return (
        <div className=''>
            <DashMenu></DashMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashbordLayout;