import cleanDeep from 'clean-deep';
import qs from 'qs';

export const cn = (...classes: (string | false | null | undefined)[]): string => classes.filter(Boolean).join(' '); 


 export const createQueryPayload = (initialPayload: any) => {
                const filteredPayload = cleanDeep(initialPayload);
                const queryString = qs.stringify(filteredPayload);
                if (!queryString) return '';
                return `?${queryString}`;
};

export const formatToIST = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    // Convert to IST (UTC+5:30)
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    // The output will be like '31/05/24, 18:30:00'
    return date.toLocaleString('en-GB', options).replace(',', '');
};