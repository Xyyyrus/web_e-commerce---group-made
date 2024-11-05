import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import SearchIcon from '../assets/icons/search.png'; // Adjust the path as necessary
import CartIcon from '../assets/icons/shopping-cart.png';
import UserIcon from '../assets/icons/user.png';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useContext, useState } from 'react';
import { UserContext } from '@/contexts/userContext';
import LogoutDialog from '@/pages/auth/Logout';
import CartSheetContent from './other/cartSidebar';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { user } = useContext(UserContext);

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <>
      <div className='flex justify-between items-center p-5'>
        <h1 className='text-4xl mx-2 font-bold'>TARA AUCT!</h1>

        {/* Search Bar Container */}
        <div className='relative w-full max-w-xl mx-10 flex flex-grow justify-center'>
          <button className='absolute inset-y-0 left-0 border-r border-black rounded-r-3xl px-4 focus:outline-none'>
            All Categories
          </button>
          <input
            type='text'
            className='border border-black rounded-3xl h-12 w-full pl-40 pr-8 focus:outline-none focus:border-none focus:ring-2 focus:ring-black'
            placeholder='Search....'
          />
          <button
            className='absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none'
            type='button'
          >
            <img
              src={SearchIcon}
              alt='Search'
              className='w-6 h-6 cursor-pointer'
            />
          </button>
        </div>

        <div className='flex items-center'>
          <Sheet>
            <SheetTrigger asChild>
              <button
                className='flex items-center pr-3 focus:outline-none'
                type='button'
              >
                <img
                  src={CartIcon}
                  alt='Cart'
                  className='w-7 h-7 cursor-pointer'
                />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
                <SheetDescription className='flex flex-col'>
                 <CartSheetContent />
                
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          {user.id && (
          <Dropdown
            inline
            label={
              <img
                src={UserIcon}
                alt='User'
                className='w-7 h-7 cursor-pointer'
              />
            }
            className='mx-2 outline-none focus:outline-none active:outline-none'
            arrowIcon={false}
          >
            <div className='dropdown-menu absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <Dropdown.Item>
                <Link
                  to='/account'
                  className='w-full text-center text-black block  hover:bg-gray-100 focus:outline-none'
                >
                  Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to='/account/settings'
                  className='w-full text-center text-black block  hover:bg-gray-100'
                >
                  Settings
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to='/account/bidding-history'
                  className='w-full text-center text-black block  hover:bg-gray-100'
                >
                  Bidding History
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to='/account/my-products'
                  className='w-full text-center text-black block  hover:bg-gray-100'
                >
                  My Products
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to='/account/my-orders'
                  className='w-full text-center text-black block  hover:bg-gray-100'
                >
                  My Orders
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to='/account/my-wishlist'
                  className='w-full text-center text-black block  hover:bg-gray-100'
                >
                  My Wishlist
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  className='w-full text-center text-black block hover:bg-gray-100'
                  onClick={() => setIsDialogOpen(true)}

                >
                  Logout
                </Link>
              </Dropdown.Item>
            </div>
          </Dropdown>
          )}

          {user.id ? (
            <Button className='px-10' rounded='lg' onClick={() => navigate('/account')}>
              Hi, {user.Username}!
            </Button>
          ):(
            <Button className='px-10' rounded='lg' onClick={handleLoginClick}>
                  Login
            </Button>
          )} 
          
        </div>
      </div>

      <nav>
        <div className='flex justify-center items-center border-2 py-3 bg-black text-white'>
          <Button asChild>
            <Link className='p-1 px-10' to='/'>
              Home
            </Link>
          </Button>

          {/* Shop Now Dropdown */}
          <Dropdown inline label='Shop Now' className='mx-2 px-1'>
            <Dropdown.Item>
              <Link
                to='/shop-now'
                className='w-full text-black block hover:bg-gray-100 text-center'
              >
                Shop Now
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to='/login-seller'
                className='w-full text-black block hover:bg-gray-100 text-center'
              >
                Sell Now
              </Link>
            </Dropdown.Item>
          </Dropdown>
          <div className='w-10' />

          {/* Trade Deals Dropdown */}
          <Dropdown inline label='Trade Deals' className='mx-2'>
            <Dropdown.Item>
              <Link
                to='/trade-deals'
                className='w-full text-black block  hover:bg-gray-100 text-center'
              >
                Trade Deals
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to='/bidding-zone'
                className='w-full text-black block  hover:bg-gray-100 text-center'
              >
                Bidding Zone
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to='/trade-events'
                className='w-full text-black block hover:bg-gray-100 text-center'
              >
                Trade Events
              </Link>
            </Dropdown.Item>
          </Dropdown>
          <Button asChild>
            <Link className='p-1 px-10' to='/about'>
              About Us
            </Link>
          </Button>
        </div>
      </nav>


      <LogoutDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default Navbar;
