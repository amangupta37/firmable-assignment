import React, { useLayoutEffect } from 'react';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

import type { AppProps } from 'next/app';
import { DashboardLayout } from '@/layouts';
import { ReactQueryProvider } from '@/config';
import '../styles/global.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    useLayoutEffect(() => {
        router.replace('/dashboard');
    }, []);

    return (
        <div className={inter.variable}>
            <ReactQueryProvider>
                <DashboardLayout>
                    <Component {...pageProps} />
                </DashboardLayout>
            </ReactQueryProvider>
        </div>
    );
};

export default App;
