import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Login from '../Pages/Login';
import Register from "../Pages/Register";
import AddEquipment from '../Pages/AddEquipment';
import Home from '../Pages/Home';
import AllSportsEquipment from '../Pages/AllSportsEquipment';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                loader: () => fetch('http://localhost:5000/SportsEquipment')

            },
            {
                path: '/AddEquipment',
                element: <AddEquipment></AddEquipment>

            },

        ]
    }
])

export default router;