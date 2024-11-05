import { useState } from 'react';
import loginBg from '../../../assets/images/login-bg.png';
import ForgotPassword from '../../auth/ForgotPassword';


function LoginSeller() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleForgotPasswordClick = () => {
        setIsForgotPassword(true);
    };

    const handleBackToLoginClick = () => {
        setIsForgotPassword(false);
    };

    return (
        <div className='w-screen h-screen flex items-end justify-around relative px-16 pt-16'
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='text-white self-center space-y-10 mb-64 m-20 pr-96'>
                <h1 className='font-bold text-8xl'>LOGO</h1>
                <sub className='font-bold text-5xl'>&quot;Unlock the Best Deals - Trade, Buy, & Sell!&quot;</sub>
                <p className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            </div>
            <div className='bg-white text-black rounded-t-3xl w-full max-w-lg h-full p-12 pt-16 relative'>  
         
                <form>
                    {/* Conditional Rendering of Inputs */}
                    {isForgotPassword ? (
                        <ForgotPassword onBackToLogin={handleBackToLoginClick} />
                    ) : (
                        <>
                            {/* Email Input */}
                            <sub>WELCOME BACK SELLER!</sub>
                            <h1 className='text-3xl mb-10'>{isForgotPassword ? 'Forgot Password?' : 'Log In To Your Account'}</h1>

                            <div className="relative mb-6">
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 placeholder-transparent" 
                                    placeholder="Email" 
                                    required 
                                />
                                <label 
                                    htmlFor="email" 
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                                    bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"
                                >
                                    Email
                                </label>
                            </div>

                            {/* Password Input */}
                            <div className="relative mb-6">
                                <input 
                                    type={passwordVisible ? "text" : "password"} 
                                    id="password" 
                                    className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 placeholder-transparent" 
                                    placeholder="Password" 
                                    required 
                                />
                                <label 
                                    htmlFor="password" 
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                                    bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"
                                >
                                    Password
                                </label>
                                <button 
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 focus:outline-none"
                                >
                                    {passwordVisible ? 'Hide' : 'Show'}
                                </button>
                            </div>

                            {/* Remember Me and Forgot Password */}
                            <div className='flex items-center mb-4 justify-between'>
                                <div className='flex items-center'>
                                    <input 
                                        type="checkbox" 
                                        id="rememberMe" 
                                        className="form-checkbox h-4 w-4 text-black border-gray-400 rounded focus:ring-black focus:ring-0 focus:outline-none mr-1"
                                    />
                                    <label 
                                        htmlFor="rememberMe" 
                                        className="text-md text-gray-700"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                                <button type="button" onClick={handleForgotPasswordClick} className='text-black hover:text-black text-center'>Forgot Password?</button>
                            </div>

                            <button className='bg-black text-white rounded-xl text-lg p-2.5 w-full'>Log In</button>

                            <div className='flex items-center my-5'>
                                <div className='flex-grow border-t border-gray-300'></div>
                                <span className='mx-3 text-md'>or</span>
                                <div className='flex-grow border-t border-gray-300'></div>
                            </div>
                            <button className='border-black border text-black rounded-xl text-ml p-2 w-full'>Log In with Google</button>
                            <div className='flex items-center justify-center mt-4'>
                                <sub className='mr-1 mb-1 text-md'> New User?</sub>
                                <a href='/register-seller' className='font-bold text-black hover:text-black underline'>SIGN UP HERE</a>
                            </div>

                            <div className='text-center mt-16'>
                                <a href='/' className='font-bold text-black hover:text-black text-center'>Back</a>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginSeller;
