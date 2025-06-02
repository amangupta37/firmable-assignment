'use client';

import { Header, SideMenu } from '@/components';
import { useScreenSize } from '@/hooks';
import React, { useState } from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
    const { children } = props;
    const { width: getWindowWidth } = useScreenSize();
    const [profileModal, setProfileModal] = useState(true);
    const [hamburgerChange, setHamburgerChange] = useState(false);

    const handleHamburgerClick = () => {
        setHamburgerChange((prev) => !prev);
    };

    return (
        <div
            className="w-full min-h-[100vh] bg-neutral-200 flex"
            onClick={() => {
                setProfileModal(false);
            }}
        >
            <Header
                profileModal={profileModal}
                setProfileModal={setProfileModal}
                onClickHamburger={handleHamburgerClick}
                //       hamburgerChange={hamburgerChange}
            />
            {getWindowWidth && getWindowWidth >= 1280 && (
                <SideMenu className="sm:hidden xl:block" />
            )}
            {hamburgerChange && (
                <React.Fragment>
                    <SideMenu className="fixed left-0" />
                    <div
                        className={`fixed top-0 left-0 bottom-0 right-0  w-full h-[100vh] z-[5] `}
                        onClick={(e) => {
                            e.stopPropagation();
                            setHamburgerChange(false);
                        }}
                    ></div>
                </React.Fragment>
            )}
            <section
                className={`w-full min-h-[100vh] pt-[72px] pr-[24px] overflow-scroll sm:pl-4 xl:pl-0 ${
                    hamburgerChange ? 'sm:blur-sm xl:blur-0' : ''
                }`}
            >
                {children}
            </section>
        </div>
    );
};

export { DashboardLayout };
