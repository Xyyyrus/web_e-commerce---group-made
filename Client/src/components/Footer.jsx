import { Link } from 'react-router-dom';
import FacebookIcon from '../assets/icons/facebook.png'; // Adjust the path as necessary
import InstagramIcon from '../assets/icons/instagram.png';
import TiktokIcon from '../assets/icons/tiktok.png';



const Footer = () => {
    return(

        <div className=''>
            <div className='bg-gray-300 flex justify-center '>
            <button className="flex items-center pr-3 focus:outline-none" type="button"> {/* Adjusted spacing */}
                        <img src={FacebookIcon} alt="User" className="w-15 h-10 m-2 cursor-pointer" />
                    </button>
                    <button className="flex items-center pr-3 focus:outline-none" type="button"> {/* Adjusted spacing */}
                        <img src={InstagramIcon} alt="User" className="w-15 h-12 m-2 cursor-pointer" />
                    </button>

                       <button className="flex items-center pr-3 focus:outline-none" type="button"> {/* Adjusted spacing */}
                        <img src={TiktokIcon} alt="User" className="w-15 h-10 m-2 cursor-pointer" />
                    </button>   
            </div>
            <div className='bg-black text-white p-3 pt-9 flex-col'>
                <div className='flex'>
                    <div className='w-1/3 px-12'>
                        <h1 className='font-bold text-7xl mb-4'>LOGO</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</h4>
                    </div>
                    <div className='flex justify-around w-full'>

                 
                        <div>
                            <h1 className='font-bold text-3xl'>Explore</h1>
                            <hr className='border-white my-2' /> {/* White divider line with margin */}
                            <ul className='space-y-2'> 
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop-now'>Shop Now</Link></li>
                                <li><Link to='/'>Sell Now</Link></li>
                                <li><Link to='/trade-deals'>Trade Deals</Link></li>
                                <li><Link to='/'>Bidding Zone</Link></li>
                                <li><Link to='/'>Trade Events</Link></li>
                                <li><Link to='/about'>About Us</Link></li>
                            
                            </ul>
                        </div>

                        
                        <div>
                            <h1 className='font-bold text-3xl'>Categories</h1>
                            <hr className='border-white my-2' /> {/* White divider line with margin */}
                            <ul className='space-y-2'> 
                                <li><Link to='/'>Electronics</Link></li>
                                <li><Link to='/shop-now'>Fashion & Accessories</Link></li>
                                <li><Link to='/'>Home & Furniture</Link></li>
                                <li><Link to='/trade-deals'>Automobile & Motorcylces</Link></li>
                                <li><Link to='/'>Health and Beauty</Link></li>
                                <li><Link to='/'>Baby & Kids</Link></li>
                                <li><Link to='/about'>Pet Supplies</Link></li>
                            
                            </ul>
                        </div>

                        <div className='pt-10'>
                            <ul className='space-y-2'> 
                                <li><Link to='/'>Art & Collectibles</Link></li>
                                <li><Link to='/shop-now'>Shoes</Link></li>
                                <li><Link to='/'>Toys & Games</Link></li>
                                <li><Link to='/trade-deals'>Sports & Lifestyle</Link></li>
            
                            
                            </ul>
                        </div>

                        <div>
                            <h1 className='font-bold text-3xl'>Contact</h1>
                            <hr className='border-white my-2' /> {/* White divider line with margin */}
                            <ul className='space-y-2'> 
                                <li><Link to='/'>sampl@gmail.com</Link></li>
                                <li><Link to='/shop-now'>sampl@gmail.com</Link></li>
                                <li><Link to='/'>+63 912 3456 789</Link></li>
                                <li><Link to='/trade-deals'>+63 911 0090 908</Link></li>
                           
                            
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className='flex justify-center my-5'>
                    <hr className='border-white w-3/4' /> {/* Set the width of the divider */}
                </div>
                <div className='text-center'>© 2024 Company Name. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer;