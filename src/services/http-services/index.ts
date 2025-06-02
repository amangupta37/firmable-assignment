import { axiosInstance } from '@/interceptor';

export const Get = async (url: string, params: any, config: any) => {
        const response = await axiosInstance.get(url, { params, ...config });
        return response.data;
};

export const Post = async (url: string, data: any, config: any) => {
        const response = await axiosInstance.post(url, data, config);
        return response;
};

export const Delete = async (url: string, config: any) => {
        const response = await axiosInstance.delete(url, config);
        return response;
};

export const Put = async (url: string, data: any, config: any) => {
        const response = await axiosInstance.put(url, data, config);
        return response;
};

export const Patch = async (url: string, data: any, config: any) => {
        const response = await axiosInstance.patch(url, data, config);
        return response;
};
