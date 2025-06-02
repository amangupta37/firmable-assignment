import {  useMutation } from '@tanstack/react-query';


import { endpoints } from '@/apis';
import { Get } from '../http-services';
import { createQueryPayload } from '@/utils';


export const useGetAllMetrics = (props: any) => {

        const requestURL = (data: any) =>
                `${endpoints.GET_DASHBOARD_DATA}${createQueryPayload(data)}`;


        const response = useMutation({
                mutationKey: ['all-metrics'],
                mutationFn: async (data) => await Get(requestURL(data), {}, {}),
                ...props,
        });

        const { data } = response as any;

        return {
                ...response,
                data: data,
        };
};