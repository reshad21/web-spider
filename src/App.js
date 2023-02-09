import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
