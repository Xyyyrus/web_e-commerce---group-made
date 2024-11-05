import axios from '../api/api'; // Adjusted the import to use your custom axios instance
import { useContext } from 'react';
import { UserContext } from '@/contexts/userContext';
import { useQuery, useMutation } from 'react-query'; // Import useQuery from react-query


export const useFetchAccountDetails = () => {
    const { user } = useContext(UserContext); 

    // Fetch account details using useQuery
    return useQuery(['accountDetails', user.id], async () => {
        if (!user.id) {
            throw new Error('User ID is required to fetch account details');
        }

        const response = await axios.get(`/buyers/${user.id}`);
        return response.data; // Return the full response data
    }, {
        enabled: !!user.id, // Only run the query if user.id is available
    });
};

export const useUpdateAccountDetails = () => {
    const { user } = useContext(UserContext); 

    // Use useMutation for updating account details
    return useMutation(
        async (updatedDetails) => {

            console.log('detailsup', updatedDetails)
            if (!user.id) {
                throw new Error('User ID is required to update account details');
            }
            // Send a PUT or PATCH request to update the account details
            const response = await axios.put(`/buyers/${user.id}`, updatedDetails);
            return response.data; // Return the updated response data
        }
    );
};