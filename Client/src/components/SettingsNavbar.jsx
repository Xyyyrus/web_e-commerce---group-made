import { Link } from "react-router-dom";

function SettingsNavbar() {
    return ( 
        <div className="flex flex-col items-center justify-center w-1/4 bg-white shadow mr-10">
            <h1 className="font-bold text-3xl p-2 py-5 border-b-2 border-gray-300">My Account</h1>

            <Link to="/account" className='text-black text-center p-3 py-5 text-xl w-full hover:bg-black hover:text-white cursor-pointer'>
                Profile
            </Link>
            <Link to="/account/settings" className='text-black text-center p-3 py-5 text-xl w-full hover:bg-black hover:text-white cursor-pointer'>
                Settings
            </Link>
            <Link to="/account/bidding-history" className='text-black text-center p-3 py-5 text-xl w-full hover:bg-black hover:text-white cursor-pointer'>
                Bidding History
            </Link>
            <Link to="/account/my-products" className='text-black text-center p-3 py-5 text-xl w-full hover:bg-black hover:text-white cursor-pointer'>
                My Product
            </Link>
            <Link to="/account/my-orders" className='text-black text-center p-3 py-5 text-xl w-full hover:bg-black hover:text-white cursor-pointer'>
                My Orders
            </Link>
            <Link to="/account/my-wishlist" className='text-black text-center p-3 py-5 text-xl w-full hover:bg-black hover:text-white cursor-pointer'>
                My Wishlist
            </Link>
        </div>
    );
}

export default SettingsNavbar;
