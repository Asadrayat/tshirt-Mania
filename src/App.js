import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import About from './Components/About/About';
import Grandpa from './Components/Grandpa/Grandpa';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          loader: () => fetch('tshirt.json'),
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/order",
          element: <Order></Order>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/grandpa",
          element: <Grandpa></Grandpa>,
        }
      ]
    }

  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
