import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Login from '../Pages/Login';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<h1>hoem</h1>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    }
])

export default router;