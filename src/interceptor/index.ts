
import Axios from 'axios';

export const axiosInstance = Axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL, //change to the actual base url 
});

// intercept before making network request
axiosInstance.interceptors.request.use(
        (config) => {
                return config;
        },
        (error) => {
                return Promise.reject(error);
        },
);

// intercept after getting response form server
axiosInstance.interceptors.response.use(
        (response) => {
                return response;
        },
        (error) => {
               
                return Promise.reject(error);
        },
);
