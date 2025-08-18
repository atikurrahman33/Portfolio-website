import { Outlet } from "react-router-dom";
import Navbar from "../page/Shared/Navbar/navbar.jsx";
import Footer from "../page/Shared/Footer/Footer.jsx";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;