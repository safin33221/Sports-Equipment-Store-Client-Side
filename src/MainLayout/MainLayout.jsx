import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main>
                <Outlet></Outlet>
            </main>
            
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default MainLayout;