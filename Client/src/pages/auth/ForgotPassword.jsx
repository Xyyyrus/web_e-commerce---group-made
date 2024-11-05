/* eslint-disable react/prop-types */


function ForgotPassword({ onBackToLogin }) {
    return (
        <div className="">
            <h1 className='text-3xl mb-10 font-bold text-center'>LOGO</h1>
            <div className="border border-gray-300 px-3 pt-8 pb-5 mb-10 rounded-sm">
                <h1 className='text-3xl mb-5 font-semibold'>Forgot Password?</h1>
                <p className='text-gray-700 text-sm font-semibold mb-1'>Enter your email address</p>
                <p className='text-gray-700 text-sm font-semibold mb-6'>We&apos;ll send you a link to reset your password</p>
                <div className="relative">
                    <input 
                        type="email" 
                        id="forgotEmail" 
                        className="peer bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-4 placeholder-transparent" 
                        placeholder="Email" 
                        required 
                    />
                    <label 
                        htmlFor="forgotEmail" 
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-2.5 scale-75 top-0 z-10 origin-[0]
                        bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"
                    >
                        Email
                    </label>
                </div>
            </div>
            <button className='bg-black text-white rounded-xl text-lg p-2.5 w-full'>Send Reset Link</button>
            <div className='text-center mt-4'>
                <button type="button" onClick={onBackToLogin} className='font-bold text-black hover:text-black'>Back to Login</button>
            </div>
        </div>
    );
}

export default ForgotPassword;
