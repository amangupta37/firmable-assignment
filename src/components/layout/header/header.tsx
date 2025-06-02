'use client';
import React from 'react';

import { Typography } from '@/components';
import { BellIcon, Hamburger, Logo, UserProfile } from '@/assets';

interface HeaderProps {
    className?: string;
    onClickHamburger?: () => void;
    profileModal?: boolean;
    setProfileModal?: (value: boolean) => void;
}

const Header = (props: HeaderProps) => {
    const { className, onClickHamburger } = props;

    const customClassName = `min-h-[56px] w-full py-0 pl-[24px] pr-[32px] fixed top-0 bg-neutral-100 border-b border-neutral-200 z-[100] flex justify-between items-center  ${className}`;

    return (
        <nav className={customClassName}>
            <div className="flex flex-row gap-4 items-center">
                <Hamburger
                    color="#000000"
                    onClick={onClickHamburger}
                    className="cursor-pointer sm:block xl:hidden"
                />
                <div className=" cursor-pointer">
                    <Logo className="!w-[100px] !h-[30px]" />
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <BellIcon className="cursor-pointer" />
                <div className="relative">
                    <div className="flex gap-2 items-center cursor-pointer">
                        <UserProfile className="w-6 h-6 object-cover" />

                        <Typography
                            type="l6"
                            className="text-neutral-800"
                        >
                            Aman Gupta
                        </Typography>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Header };
