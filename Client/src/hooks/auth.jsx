import { useMutation } from 'react-query';
import axios from '../api/api'; // Adjusted the import to use your custom axios instance

export const useLoginUser = () => {
    return useMutation(
        async ({ email, password }) => {
            const response = await axios.post("/auth/login", {
                email,
                password,
            });

            return response.data; // Return the full response data
        },
    );
};

export const useRegisterBuyer = () => {
    return useMutation(
        async ({ email, username, password }) => {
            const response = await axios.post("/auth/register-buyer", {
                username,
                password,
                email,
            });

            return response.data; // Return the full response data
        },
    );
};


export const useForgotPassword = () => {
    return useMutation(
        async (email) => {
            const response = await axios.post("/api/auth/reset-password", {
                Email: email,
            });
            return response.status; // You can return the status or any relevant data
        },
    );
};

export const useFetchEmail = () => {
    return useMutation(
        async ({ id }) => {
            const response = await axios.post("/api/otp/get-email", { id });
            return response.data;
        },
    );
};

export const useSendOtp = () => {
    return useMutation(
        async ({ id }) => {
            const response = await axios.post("/api/otp/send-otp", { id });
            return response.data;
        },
    );
};

export const useVerifyOtp = () => {
    return useMutation(
        async ({ id, otp }) => {
            const response = await axios.post("/api/otp/verify-otp", {
                id,
                otp,
            });
            return response.data;
        },
    );
};
