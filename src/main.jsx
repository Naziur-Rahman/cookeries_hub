import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Roots from './components/roots/Roots';
import Home from './components/home/Home';
import ErroerPage from './components/erroerPage/ErroerPage'
import Footer from './components/footer/Footer';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import DinnerWare from './components/pages/DinnerWare';
import DrinkWare from './components/pages/DrinkWare';
import TawaAndGriddles from './components/pages/TawaAndGriddles';
import PressureCookersAndSteamers from './components/pages/PressureCookersAndSteamrs';
import PansAndPots from './components/pages/PansAndPots';
import TableAccessories from './components/pages/TableAccessories';
import StorageAndContainers from './components/pages/StorageAndContainers';
import BakeWare from './components/pages/BakeWare';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    errorElement: <ErroerPage></ErroerPage>,
    children: [
      {
        path: 'Home',element: <Home />,
      },
      {
        path: 'About_Us', element: <AboutUs></AboutUs>
      },
      {
        path: 'Contact_Us',element: <ContactUs></ContactUs>
      },
      {
        path: 'Dinner_Ware',element: <DinnerWare></DinnerWare>
      },
      {
        path: 'Drink_Ware',element: <DrinkWare></DrinkWare>
      },
      {
        path: 'Pressure_cookers_&_Steamrs',element: <PressureCookersAndSteamers></PressureCookersAndSteamers>
      },
      {
        path: 'Tawa_&_Griddles',element: <TawaAndGriddles></TawaAndGriddles>
      },
      {
        path: 'Pans_&_Pots',element: <PansAndPots></PansAndPots>
      },
      {
        path: 'Table_Accessories',element: <TableAccessories></TableAccessories>
      },
      {
        path: 'Storage_&_Container',element: <StorageAndContainers></StorageAndContainers>
      },
      {
        path: 'Bake_Ware',element: <BakeWare></BakeWare>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
