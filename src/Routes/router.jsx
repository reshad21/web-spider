import { createBrowserRouter } from 'react-router-dom';
import DashbordLayout from '../Layout/DashbordLayout';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Contact from '../Pages/Contact/Contact';
import CreateBlog from '../Pages/Dashbord/CreateBlog/CreateBlog';
import Dashbord from '../Pages/Dashbord/Dashbord';
import MyBlog from '../Pages/Dashbord/MyBlog/MyBlog';
import Home from '../Pages/Home/Home/Home';
import AllPortfolio from '../Pages/Home/PortfolioSection/AllPortfolio/AllPortfolio';
import ServiceDetails from '../Pages/Home/ServiceProvide/ServiceDetails';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/serviceDetails/:id/:name',
                element: <ServiceDetails></ServiceDetails>,
                // loader: ({ params }) => fetch(`servicesData.json/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/allportfolio',
                element: <AllPortfolio></AllPortfolio>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ],

    },
    {
        path: '/dashbord',
        element: <DashbordLayout></DashbordLayout>,
        children: [
            {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
            },
            {
                path: '/dashbord/createBlog',
                element: <CreateBlog></CreateBlog>
            },
            {
                path: '/dashbord/myBlog',
                element: <MyBlog></MyBlog>
            }
        ]

    },
])

export default routes;