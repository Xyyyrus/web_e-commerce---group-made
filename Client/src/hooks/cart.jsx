import axios from '../api/api'; // Adjusted the import to use your custom axios instance
import { useContext } from 'react';
import { UserContext } from '@/contexts/userContext';
import { useQuery, useMutation } from 'react-query'; // Import useQuery from react-query


export const useFetchCartById = () => {
    const { user } = useContext(UserContext); 

    // Fetch account details using useQuery
    return useQuery(['cartDetails', user.id], async () => {
        if (!user.id) {
            throw new Error('User ID is required to fetch cart details');
        }

        const response = await axios.get(`/cart/${user.id}`);
        return response.data; // Return the full response data
    }, {
        enabled: !!user.id, // Only run the query if user.id is available
    });
};

export const useAddToCart = () => {
    const { user } = useContext(UserContext); 

    // Use useMutation for updating account details
    return useMutation(
        async (Products) => {


            // Send a PUT or PATCH request to update the account details
            const response = await axios.post(`/cart/add-to-cart`, {
                Products: Products,
                BuyerId: user.id
            });
            return response.data; // Return the updated response data
        }
    );
};