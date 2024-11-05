import { Button } from "@/components/ui/button";
import { useFetchAccountDetails, useUpdateAccountDetails } from "@/hooks/buyerAccount";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import { toast } from "@/hooks/use-toast";
import { saveUserData } from "@/Utils/authStorage";

function Profile() {
    
    const { data, error, isLoading, isSuccess } = useFetchAccountDetails();
    const [account, setAccount ] = useState('');
    const [isEditing, setIsEditing] =useState(false)
    const { mutate } = useUpdateAccountDetails();

    useEffect(() => {
        if (isSuccess) {
            // Destructure user and set account properties directly
            const { user } = data;
            setAccount({
                username: user.username,
                email: user.email,
                birthday: null,
                contact: null,

            });
        }
    }, [isSuccess, data]);

    const handleInputChange = (field, value) => {
        setAccount((prevAccount) => ({
          ...prevAccount,
          [field]: value,
        }));

        console.log(account)
      };

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleCancel = () => {
        setIsEditing(false);
    }

    const handleSubmit = () => {
        console.log("updated account",account)

        mutate(
            { account },
            {
                onSuccess: (data) => {
                    toast({
                        variant: 'success',
                        title: "Acount Details Updated",
                        description: "You have successfully updated your account details!",
                    });
                    console.log(data.user)
                    saveUserData(data.user)
                    setIsEditing(false)

                    setTimeout(() => {
                        window.location.reload(); // Reload the page
                    }, 1200); // Adjust the delay as necessary (2000 ms = 2 seconds)
                    
                },
                onError: (error) => {
                    toast({
                        variant: 'failed',
                        title: "Update Failed",
                        description: error.response?.data?.message || "An error occurred. Please try again.",
                    });
                },
            }
        );
    }

    if (isLoading)  return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return ( 
     
        <div className="bg-white text-black w-3/4 ">
            <div>
                <div className="flex items-center bg-gray-300 p-5 font-semibold">
                    <h1 className="text-2xl mr-2">Account details</h1>
                    <IconButton onClick={handleEdit}>
                            <EditIcon sx={{color: 'black'}}/>
                    </IconButton>
                </div>
                <div className="flex items-center justify-between px-10">
            
                    <div className="w-2/3">
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Name:</label>
                            <input 
                                type="text" 
                                disabled={!isEditing}
                                className={`appearance-none border border-gray-300 text-md w-64 py-2 px-4 rounded-md placeholder-gray-400 ${
                                !isEditing ? 'bg-gray-100 text-gray-500' : 'text-gray-900'
                                }`} 
                                placeholder="John Doe" 
                                value={account?.username || ''}
                                onChange={(e) => handleInputChange('username', e.target.value)}

                            />
                        </div>
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Email:</label>
                            <input 
                                type="email" 
                                disabled={!isEditing} 
                                className={`appearance-none border border-gray-300 text-md w-64 py-2 px-4 rounded-md placeholder-gray-400 ${
                                !isEditing ? 'bg-gray-100 text-gray-500' : 'text-gray-900'
                                 }`} 
                                placeholder="Johndoe@gmail.com"
                                value={account?.email || ''}
                                onChange={(e) => handleInputChange('email', e.target.value)}

                            />
                        </div>
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Birthday:</label>
                            <input 
                                type="date" 
                                disabled={!isEditing}
                                className={`appearance-none border border-gray-300 text-md w-64 py-2 px-4 rounded-md placeholder-gray-400 ${
                                !isEditing ? 'bg-gray-100 text-gray-500' : 'text-gray-900'
                                }`}                                 
                                placeholder="Mobile Number" 
                                value={account?.birthday || ''}
                                onChange={(e) => handleInputChange('birthday', e.target.value)}
                                />
                        </div>
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Contact Number:</label>
                            <input
                                type="tel" 
                                disabled={!isEditing}
                                className={`appearance-none border border-gray-300 text-md w-64 py-2 px-4 rounded-md placeholder-gray-400 ${
                                !isEditing ? 'bg-gray-100 text-gray-500' : 'text-gray-900'
                                }`}                                 
                                placeholder="(123) 456-7890"
                                onChange={(e) => handleInputChange('contact', e.target.value)}

                            />
                        </div>
                        <div className="m-5 flex justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2">Password:</label>
                            <Button variant="outline">Change Password</Button>
                        </div>

                        {isEditing ? (
                            <div className="mb-5">
                                <Button onClick={handleSubmit} >Submit</Button>
                                <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                            </div>
                        ):(
                            <div className="mb-5 h-10 invisible"/>
                                    
                        )}
                      
                      
                    </div>
                    <div>
                        <div className="w-64 h-64 rounded-full bg-gray-300"></div>
                    </div>
                </div>

                {/*Billing/Shiiping Addresses */}
                <div className="bg-gray-300 p-5 font-semibold">
                    <h1 className="text-2xl">Billing/Shipping Addresses </h1>
                </div>
                <div className="flex items-start justify-between px-10">
            
                    <div className="w-1/2">
                        <div className="m-5 flex flex-col justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2"> 
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input type="text"  className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md" placeholder="John Doe" />
                        </div>
                        <div className="m-5 flex flex-col justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2"> 
                                Contact Number <span className="text-red-500">*</span>
                            </label>

                            <input type="tel"  className="appearance-none border border-gray-300 text-gray-900 text-mdw-full  py-2 px-4 rounded-md" placeholder="+63" />
                        </div>
                        <div className="m-5 flex flex-col justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2"> 
                               Select City <span className="text-red-500">*</span>
                            </label>
                            <select className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md">
                                <option value="">Select a City...</option>
                                <option value="province1">City 1</option>
                                <option value="province2">City 2</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                   
                        <div className="m-5 flex flex-col justify-between ">
                            <label className="block text-gray-700 text-xl font-medium mb-2"> 
                                Label <span className="text-red-500">*</span>
                            </label>
                            <input type="text"  className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md" placeholder="ex. Home / Work" />
                        </div>
                    </div>

                    
                    <div className="w-1/2">
                    <div className="m-5 flex flex-col justify-between">
                        <label className="block text-gray-700 text-xl font-medium mb-2">
                            Select Province <span className="text-red-500">*</span>
                        </label>
                        <select className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md">
                            <option value="">Select a province...</option>
                            <option value="province1">Province 1</option>
                            <option value="province2">Province 2</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="m-5 flex flex-col justify-between">
                        <label className="block text-gray-700 text-xl font-medium mb-2">
                            Select Barangay <span className="text-red-500">*</span>
                        </label>
                        <select className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md">
                            <option value="">Select a barangay...</option>
                            <option value="barangay1">Barangay 1</option>
                            <option value="barangay2">Barangay 2</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <div className="m-5 flex flex-col justify-between">
                        <label className="block text-gray-700 text-xl font-medium mb-2">
                            Postal Code <span className="text-red-500">*</span>
                        </label>
                        <input type="text" className="appearance-none border border-gray-300 text-gray-900 text-md w-full py-2 px-4 rounded-md" placeholder="" />
                    </div>
                </div>

                 
                </div>

            </div>
        </div>
      
     );
}

export default Profile;