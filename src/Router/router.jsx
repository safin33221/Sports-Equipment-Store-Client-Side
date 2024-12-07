import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Login from '../Pages/Login';
import Register from "../Pages/Register";
import AddEquipment from '../Pages/AddEquipment';
import Home from '../Pages/Home';
import AllSportsEquipment from '../Pages/AllSportsEquipment';
import EquipmentsDetails from '../Pages/EquipmentsDetails';
import MyEquipmentList from '../Pages/MyEquipmentList';
import UpdateEquipments from '../Pages/UpdateEquipments';
import PrivetRoute from '../PirvetRoute/PrivetRoute';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://a-sports-equipment-store-server-site.vercel.app/homeProducts')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/SportsEquipment',
                element: <AllSportsEquipment></AllSportsEquipment>,
                loader: () => fetch('https://a-sports-equipment-store-server-site.vercel.app/SportsEquipment')

            },
            {
                path: '/EquipmentDetails/:id',
                element: <PrivetRoute>
                    <EquipmentsDetails></EquipmentsDetails>
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://a-sports-equipment-store-server-site.vercel.app/SportsEquipment/${params.id}`)

            },
            {
                path: '/AddEquipment',
                element: <PrivetRoute><AddEquipment></AddEquipment></PrivetRoute>

            },
            {
                path: `/MyEquipmentList/:email`,
                element: <PrivetRoute><MyEquipmentList></MyEquipmentList></PrivetRoute>,
                loader: ({ params }) => fetch(`https://a-sports-equipment-store-server-site.vercel.app/MyEquipmentList/${params.email}`)

            },
            {
                path: `/UpdateEquipments/:id`,
                element: <PrivetRoute><UpdateEquipments></UpdateEquipments></PrivetRoute>,
                loader: ({ params }) => fetch(`https://a-sports-equipment-store-server-site.vercel.app/SportsEquipment/${params.id}`)

            },

        ]
    }
])

export default router;