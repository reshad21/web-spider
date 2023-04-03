import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import ServiceContext from './Context/ServiceContext';
import routes from './Routes/router';

function App() {
  return (
    <ServiceContext>
        <RouterProvider router={routes} />
        <Toaster></Toaster>
    </ServiceContext>
  );
}

export default App;
