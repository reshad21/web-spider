import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Contact from '../Pages/Contact/Contact';
import Dashbord from '../Pages/Dashbord/Dashbord';
import Home from '../Pages/Home/Home/Home';
import AllPortfolio from '../Pages/Home/PortfolioSection/AllPortfolio/AllPortfolio';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

const router = createBrowserRouter([
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
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
        ]
    },
])

export default router;