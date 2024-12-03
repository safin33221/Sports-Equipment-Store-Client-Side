import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Login from '../Pages/Login';
import Register from "../Pages/Register";
import AddEquipment from '../Pages/AddEquipment';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<h1></h1>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>

            },
            {
                path:'/AddEquipment',
                element:<AddEquipment></AddEquipment>

            },
            
        ]
    }
])

export default router;