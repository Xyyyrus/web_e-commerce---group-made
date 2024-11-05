import { useState } from 'react';
import loginBg from '../../assets/images/login-bg.png';
import { toast } from '@/hooks/use-toast';
import { useRegisterBuyer } from '@/hooks/auth';
import { useNavigate } from 'react-router-dom';
import { validatePassword } from '@/validations/validation';

function Register() {
    // State for form inputs
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const { mutate } = useRegisterBuyer();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        // Reset error messages
        setPasswordError('');
        setConfirmPasswordError('');

        // Validate passwords
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.');
            return;
        }
        // Check if passwords match
        if (password !== confirmPassword) {
            toast({
                variant: 'failed',
                title: "Passwords do not match",
                description: "Please make sure both passwords are the same.",
            });
            return;
        }

        // Use the mutate function to register the user
        mutate(
            { email, username: fullName, password },
            {
                onSuccess: () => {
                    toast({
                        variant: 'success',
                        title: "Registration Successful",
                        description: "You have successfully registered!",
                    });
                    navigate('/login')
                },
                onError: (error) => {
                    toast({
                        variant: 'failed',
                        title: "Registration Failed",
                        description: error.response?.data?.message || "An error occurred. Please try again.",
                    });
                },
            }
        );
    };

    return (
        <div
            className='w-screen min-h-screen flex items-end justify-around relative px-16 pt-16'
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='text-white self-center space-y-10 mb-64 m-20 pr-96'>
                <h1 className='font-bold text-8xl'>LOGO</h1>
                <sub className='font-bold text-5xl'>
                    &quot;Unlock the Best Deals - Trade, Buy, & Sell!&quot;
                </sub>
                <p className='text-3xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                </p>
            </div>
            <div className='bg-white text-black rounded-t-3xl w-full max-w-lg h-full p-12'>
                <sub>WELCOME BACK!</sub>
                <h1 className='text-3xl mb-10'>Create Account</h1>

                <form onSubmit={handleSubmit}>
                    {/* Full Name Input */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            id="full_name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black placeholder-transparent"
                            placeholder="Enter Full Name"
                            required
                        />
                        <label
                            htmlFor="full_name"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                            bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"
                        >
                            Full Name
                        </label>
                    </div>

                    {/* Email Input */}
                    <div className="relative mb-6">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black placeholder-transparent"
                            placeholder="Enter Email"
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                            bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"
                        >
                            Email
                        </label>
                    </div>

                    {/* Password Input */}
                    <div className={`relative mb-6 ${passwordError ? 'border-red-500' : ''}`}>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError(''); 
                            }}
                            className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black placeholder-transparent"
                            placeholder="Password"
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
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
                        {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}

                    </div>

                    {/* Confirm Password Input */}
                    <div className={`relative mb-6 ${confirmPasswordError ? 'border-red-500' : ''}`}>
                        <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            id="confirm_password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setConfirmPasswordError(''); // Clear confirm password error on change
                            }}
                            className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black placeholder-transparent"
                            placeholder="Confirm Password"
                            required
                        />
                        <label
                            htmlFor="confirm_password"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                            bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"
                        >
                            Confirm Password
                        </label>
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 focus:outline-none"
                        >
                            {confirmPasswordVisible ? 'Hide' : 'Show'}
                        </button>
                        {confirmPasswordError && <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>}

                    </div>

                    <p className='mb-3'>
                        By creating an account, you are agreeing to our <b>Privacy Policy</b> and <b>Electronics Communication Policy.</b>
                    </p>
                    <button
                        className='bg-black text-white rounded-xl text-lg p-2.5 w-full'
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
                    <div className='flex items-center my-5'>
                        <div className='flex-grow border-t border-gray-300'></div>
                        <span className='mx-3 text-md'>or</span>
                        <div className='flex-grow border-t border-gray-300'></div>
                    </div>

                    <button className='border-black border text-black rounded-xl text-ml p-2 w-full mb-3'>
                        Continue with Facebook
                    </button>
                    <button className='border-black border text-black rounded-xl text-ml p-2 w-full'>
                        Continue with Google
                    </button>

                    <div className='flex items-center justify-center mt-4'>
                        <sub className='mr-3 mb-1 text-LG'>Already have an Account?</sub>
                        <a href='/login' className='font-bold text-black hover:text-black'>LOG IN</a>
                    </div>
             
            </div>
        </div>
    );
}

export default Register;
