import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom
import Navbar from "./Navbar";
import Footer from "./Footer";
import SettingsNavbar from "./SettingsNavbar";

export const LandingLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mx-auto flex-grow p-4 px-32">
                <Outlet /> {/* This will render the matched child routes */}

            </div>
            <Footer />
        </div>
    );
}

export const SettingsLayout = () => {
    return (
        <div className="flex justify-between items-start p-4 bg-gray-100">
            <SettingsNavbar />
                <Outlet /> {/* This will render the matched child routes */}
            
        </div>
    );
}


