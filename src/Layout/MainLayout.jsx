import { Outlet } from "react-router-dom";
import Navbar from "../page/Shared/Navbar/navbar.jsx";
import Footer from "../page/Shared/Footer/Footer.jsx";


const MainLayout = () => {
    return (
        <div className=" relative sm:px-6 overflow-hidden
bg-[linear-gradient(to_right,rgba(56,189,248,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.2)_1px,transparent_1px)]
bg-[length:40px_40px]
dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.2)_1px,transparent_1px)]
dark:bg-[length:40px_40px]
">
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;