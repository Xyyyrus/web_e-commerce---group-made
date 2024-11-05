// RegisterSeller.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

//header component
const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="w-full p-4 bg-black text-white flex items-center justify-between">
            <div className="flex flex-col items-start">
                <span className="text-4xl font-bold ml-1">Tara Auct!</span>
                <span className="text-base font-semibold mt-1 ml-2">Seller Registration</span>
            </div>

            {/* Login Button */}
            <button
                className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
                onClick={() => navigate("/login-seller")}
            >
                Login
            </button>
        </header>
    );
};

const RegisterSeller = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [tab, setTab] = useState("shopInformation");
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(""); // For dynamic modal content
    const [email, setEmail] = useState("");
    const [shopName, setShopName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [errors, setErrors] = useState({});
    const [shopInfoComplete, setShopInfoComplete] = useState(false);
    const [businessErrors, setBusinessErrors] = useState({});
    const [sellerType, setSellerType] = useState("");
    const [registeredName, setRegisteredName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [industryCategory, setIndustryCategory] = useState("");
    const maxPhoneDigits = 10;
    const maxOtpDigits = 6;

    const handleStartRegistration = () => setIsRegistered(true);

    const handleNext = () => {
        const validationErrors = validateShopInformation();
        if (Object.keys(validationErrors).length === 0) {
            setShopInfoComplete(true); // Enable access to business information
            setTab("businessInformation"); // Automatically navigate to business information
        } else {
            setErrors(validationErrors);
        }
    };

    // Validate Shop Information fields
    const validateShopInformation = () => {
        const validationErrors = {};
        if (!shopName || !/^[a-zA-Z\s-_&]+$/.test(shopName)) validationErrors.shopName = "Shop name can only include letters, spaces, -, _, &";
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) validationErrors.email = "Enter a valid email address";
        if (!phoneNumber || phoneNumber.length !== maxPhoneDigits) validationErrors.phoneNumber = "Enter a valid 10-digit phone number";
        if (!otp || otp.length !== maxOtpDigits) validationErrors.otp = "OTP must be exactly 6 digits";
        setErrors(validationErrors);
        return validationErrors;
    };

    const validateBusinessInformation = () => {
        const errors = {};
        if (!sellerType) errors.sellerType = "Please select a seller type";
        if (!registeredName || !/^[a-zA-Z\s-']+$/.test(registeredName)) errors.registeredName = "Registered name can only include letters, spaces, -, and '";
        if (!businessName || !/^[a-zA-Z\s-']+$/.test(businessName)) errors.businessName = "Business name can only include letters, spaces, -, and '";
        if (!industryCategory) errors.industryCategory = "Please select an industry category";
        if (!isAgreed) errors.agreement = "You must agree to proceed";
        setBusinessErrors(errors);
        return errors;
    };

    // Re-check Shop Information whenever a field changes
    useEffect(() => {
        const validationErrors = validateShopInformation();
        setShopInfoComplete(Object.keys(validationErrors).length === 0);
    }, [email, shopName, phoneNumber, otp]);

    const handlePhoneNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, ""); // Only allow numbers
        if (input.length <= maxPhoneDigits) setPhoneNumber(input);
    };

    const handleOtpChange = (e) => {
        const input = e.target.value.replace(/\D/g, ""); // Only allow numbers
        if (input.length <= maxOtpDigits) setOtp(input);
    };

    const handleBusinessNext = () => {
        const errors = validateBusinessInformation();
        if (Object.keys(errors).length === 0) {
            alert("Business registration complete!");
        }
    };

    const handleBack = () => setTab("shopInformation");

    const handleModalDone = () => setShowModal(false);
    const handleCheckboxChange = () => setIsAgreed(!isAgreed);

    const openTermsModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    if (isRegistered) {
        return (
            <>
            <Header className="w-full p-4 bg-gray-900 text-center text-white" />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-white">
                <div className="w-full max-w-xl bg-gray-300 p-9 rounded-lg border-2 border-black text-black">
                    {/* Progress Indicator */}
                    <div className="flex justify-center mb-6 items-center">
                        <div className="flex items-center space-x-4 w-full">

                            <div className="flex flex-col items-center">
                                <div className={`h-4 w-4 rounded-full ${tab === "shopInformation" ? "bg-black" : "bg-white"}`}></div>
                                <span className="text-base mt-1">Shop Information</span>
                            </div>
                            <div className="flex-grow h-0.5 bg-white mb-7"></div> {/* Connecting line */}

                            <div className="flex flex-col items-center">
                                <div className={`h-4 w-4 rounded-full ${tab === "businessInformation" ? "bg-black" : "bg-white"}`}></div>
                                <span className="text-base">Business Information</span>
                            </div>
                        </div>
                    </div>

                    {/* Shop Information */}
                    {tab === "shopInformation" && (
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => setErrors(validateShopInformation())}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="example@email.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block mb-2">Shop Name</label>
                                <input
                                    type="text"
                                    value={shopName}
                                    onChange={(e) => setShopName(e.target.value)}
                                    onBlur={() => setErrors(validateShopInformation())}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Enter your shop name"
                                />
                                {errors.shopName && <p className="text-red-500 text-sm">{errors.shopName}</p>}
                            </div>
                            <div>
                                <label className="block mb-2">Pickup Address</label>
                                <button className="w-full p-2 border rounded-md text-left" onClick={() => setShowModal(true)}>+Add</button>
                            </div>
                            <div>
                                <label className="block mb-2">Phone Number</label>
                                <div className="flex items-center border rounded-md p-2">
                                    <span className="mr-2">+63</span>
                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        onBlur={() => setErrors(validateShopInformation())}
                                        className="w-full p-2 border-none outline-none"
                                        placeholder="1234567890"
                                    />
                                    <span className="ml-2 text-gray-500">{phoneNumber.length}/{maxPhoneDigits}</span>
                                </div>
                                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="OTP"
                                    value={otp}
                                    onChange={handleOtpChange}
                                    onBlur={() => setErrors(validateShopInformation())}
                                    className="w-full p-2 border rounded-md"
                                    maxLength="6"
                                />
                                <button className="bg-white px-4 py-2 rounded-md text-black">Send</button>
                                <button className="bg-black px-4 py-2 rounded-md text-white">Resend</button>
                            </div>
                            {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
                            <button className="bg-black text-white w-full py-2 rounded-md mt-4" onClick={handleNext}>Next</button>
                        </div>
                    )}

                    {/* Business Information */}
                    {tab === "businessInformation" && shopInfoComplete && (
                        <div className="space-y-4">
                            <p className="text-sm text-gray-700">
                                Please note that the information provided in this registration form will be used to generate invoices and process transactions...
                            </p>
                            <div>
                                <label className="block mb-2">Seller Type</label>
                                <div className="flex items-center gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="sellerType" value="Sole Proprietorship" onChange={(e) => setSellerType(e.target.value)} />
                                        Sole Proprietorship
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="sellerType" value="Partnership/Corporation" onChange={(e) => setSellerType(e.target.value)} />
                                        Partnership/Corporation
                                    </label>
                                </div>
                                {businessErrors.sellerType && <p className="text-red-500 text-sm">{businessErrors.sellerType}</p>}
                            </div>
                            <div>
                                <label className="block mb-2">Registered Name</label>
                                <input
                                    type="text"
                                    value={registeredName}
                                    onChange={(e) => setRegisteredName(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Full Name"
                                />
                                {businessErrors.registeredName && <p className="text-red-500 text-sm">{businessErrors.registeredName}</p>}
                            </div>
                            <div>
                                <label className="block mb-2">Business Name / Trade Name</label>
                                <input
                                    type="text"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Business Name"
                                />
                                {businessErrors.businessName && <p className="text-red-500 text-sm">{businessErrors.businessName}</p>}
                            </div>
                            <div>
                                <label className="block mb-2">Industry Category</label>
                                <select
                                    value={industryCategory}
                                    onChange={(e) => setIndustryCategory(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                >
                                    <option value="">Select</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Home Goods">Home Goods</option>
                                </select>
                                {businessErrors.industryCategory && <p className="text-red-500 text-sm">{businessErrors.industryCategory}</p>}
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="agree" checked={isAgreed} onChange={handleCheckboxChange} />
                                <label htmlFor="agree" className="text-sm text-gray-700">
                                    I agree to these <button className="text-blue-500" onClick={() => openTermsModal("Terms and Conditions")}>Terms and Conditions</button> and <button className="text-blue-500" onClick={() => openTermsModal("Data Privacy Policy")}>Data Privacy Policy</button>
                                </label>
                            </div>
                            {businessErrors.agreement && <p className="text-red-500 text-sm">{businessErrors.agreement}</p>}
                            <div className="flex justify-between">
                                <button className="bg-gray-200 text-black w-full py-2 rounded-md mr-2" onClick={handleBack}>Back</button>
                                <button className="bg-black text-white w-full py-2 rounded-md ml-2" disabled={!isAgreed} onClick={handleBusinessNext}>Next</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal for Terms and Conditions or Privacy Policy */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg w-full max-w-md text-black">
                            <h2 className="text-lg font-semibold mb-4">{modalContent}</h2>
                            <p className="text-sm text-gray-700">[Placeholder text for {modalContent}. This would include details about {modalContent} for users to read and understand before agreeing.]</p>
                            <div className="flex justify-end mt-6">
                                <button className="px-4 py-2 bg-black text-white rounded-md" onClick={handleModalDone}>Close</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            </>
        );
    }

    return (
        <>
        <Header className="w-full p-4 bg-gray-900 text-center text-white" />
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="bg-gray-200 w-1/2 h-[500px] rounded-3xl border border-black p-10 flex flex-col items-center justify-center space-y-5">
                <img
                    src="/src/assets/images/seller-register.png"
                    alt="seller-register-icon"
                    className="w-25 h-40 mb-5"
                />
                <h1 className="font-bold text-4xl text-center">Welcome to Tara Auct!</h1>
                <p className="text-center">To get started, sign up as a seller by completing the necessary details.</p>
                <Button className="bg-black text-white px-14 py-3 rounded-md mt-4" onClick={handleStartRegistration}>Start Registration</Button>
            </div>
        </div>
        </>
    );
};

export default RegisterSeller;
