import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main className="my-5">
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default MainLayout;