import { Link, Outlet } from "react-router-dom";

const NavbarPage = () => {
    return (
        <div className="flex h-24 bg-sky-900 py-8 px-32 justify-between">

            <h1 className="text-xl font-bold text-white  cursor-pointer">
                Logo
            </h1> 
            <ul className="flex space-x-6">
                <li className="text-sm font-bold text-white cursor-pointer">
                   <a href="/">Home</a> 
                </li>
                <li className="text-sm font-bold text-white cursor-pointer">
                <a href="/contact">Contact</a> 
                </li>
                <li className="text-sm font-bold text-white cursor-pointer">
                <a href="/profil">Profile</a> 
                </li>
            </ul>
        </div>
    )
}

export default NavbarPage;