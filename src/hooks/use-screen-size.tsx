'use client';
import { useEffect, useState } from 'react';

interface ScreenSize {
    width: number | undefined;
    height: number | undefined;
}

export const useScreenSize = (): ScreenSize => {
    const [windowSize, setWindowSize] = useState<ScreenSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Check if window is available (for SSR support)
        if (typeof window === 'undefined') return;

        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size setup

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
