'use client';

import React, { useState } from 'react';
import {
    Builder,
    Content,
    Dashboard,
    DownArrow,
    Inquires,
    Property,
    QuestionCircle,
    UpArrow,
} from '@/assets';
import { Typography } from '@/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SideMenuProps {
    className?: string;
}

const SideMenu = (props: SideMenuProps) => {
    const { className } = props;
    const currentPathname = usePathname();

    const [sideMenuContent, setSideMenuContent] = useState([
        {
            id: 1,
            label: 'Dashboard',
            routeKey: ['dashboard'],
            icon: (isSelected: boolean) => <Dashboard color={isSelected ? '#0f3cd9' : '#181818'} />,
            href: '/dashboard',
            hasChildren: false,
            restrictHighlight: true,
            pathname: '/analytics',
        },
        {
            id: 2,
            label: 'Air Temperature',
            routeKey: ['air-temperature'],
            icon: (isSelected: boolean) => <Builder color={isSelected ? '#173E80' : '#181818'} />,
            //   href: pathname.ADMIN_DASHBOARD_BUILDER,
            hasChildren: false,
            restrictHighlight: true,
            pathname: '/air-temperature',
        },
        {
            id: 3,
            label: 'Barometric Pressure',
            routeKey: ['barometric-pressure'],
            icon: (isSelected: boolean) => <Inquires color={isSelected ? '#173E80' : '#181818'} />,
            //   href: pathname.ADMIN_DASHBOARD_INQUIRY,
            hasChildren: false,
            restrictHighlight: true,
            pathname: '/barometric-pressure',
        },
        {
            id: 4,
            label: 'Relative Humidity',
            routeKey: ['relative-humidity'],
            icon: (isSelected: boolean) => <Property color={isSelected ? '#173E80' : '#181818'} />,
            href: '',
            hasChildren: true,
            isOpenNestedMenu: false,
            restrictHighlight: false,
            children: [
                {
                    id: '4a',
                    label: 'Air Temperature',
                    routeKey: ['air-temperature'],
                    // href: pathname.ADMIN_DASHBOARD_PROPERTY_LIST,
                },

                {
                    id: '4b',
                    label: 'Barometric Pressure',
                    routeKey: ['barometric-pressure'],
                    // href: pathname.ADMIN_DASHBOARD_PROPERTY_REQUEST,
                },
            ],
            pathname: '/relative-humidity',
        },
        {
            id: 5,
            label: 'Sampling Interval',
            routeKey: ['sampling-interval'],
            icon: (isSelected: boolean) => <Content color={isSelected ? '#173E80' : '#181818'} />,
            href: '',
            hasChildren: true,
            isOpenNestedMenu: false,
            restrictHighlight: false,
            children: [
                {
                    id: '5a',
                    label: 'Air Temperature',
                    routeKey: ['air-temperature'],
                    // href: pathname.ADMIN_DASHBOARD_HOMEPAGE,
                },
                {
                    id: '5b',
                    label: 'Barometric Pressure',
                    routeKey: ['barometric-pressure'],
                    // href: pathname.ADMIN_DASHBOARD_RESOURCES,
                },
                {
                    id: '5c',
                    label: 'Relative Humidity',
                    routeKey: ['relative-humidity'],
                    // href: pathname.ADMIN_DASHBOARD_FAQ,
                },
                {
                    id: '5d',
                    label: 'Sampling Interval',
                    routeKey: ['sampling-interval'],
                    // href: pathname.ADMIN_DASHBOARD_TESTIMONIAL,
                },
                {
                    id: '5e',
                    label: 'Signal Strength (RSSI)',
                    routeKey: ['signal-strength-rssi'],
                    // href: pathname.ADMIN_DASHBOARD_JOB_OPENINGS,
                },
            ],
            pathname: '/sampling-interval',
        },
        {
            id: 6,
            label: 'Data Transmission Status',
            routeKey: ['data-transmission-status'],
            icon: (isSelected: boolean) => <Property color={isSelected ? '#173E80' : '#181818'} />,
            //   href: pathname.BUILDER_PROPERTY,
            hasChildren: false,
            restrictHighlight: true,
            pathname: '/data-transmission-status',
        },
        {
            id: 7,
            label: 'Help and Support',
            routeKey: ['help-support'],
            icon: (isSelected: boolean) => (
                <QuestionCircle color={isSelected ? '#173E80' : '#181818'} />
            ),
            //   href: pathname.ADMIN_HELP_AND_SUPPORT,
            hasChildren: false,
            restrictHighlight: true,
            pathname: '/help-support',
        },
    ]);

    const activeLinkClassName =
        '!bg-primary-300 border-r-[4px] border-primary-900 !text-primary-900 hover:cursor-pointer';

    const isActiveRoute = (routeKeys: string[]) => {
        return routeKeys.some((keyword) => currentPathname?.includes(keyword));
    };

    const handleMenuClick = (selectedItem: {
        id: number;
        hasChildren: boolean;
        isOpenNestedMenu?: boolean;
    }) => {
        if (!selectedItem.hasChildren) return;

        const updatedSideMenu = sideMenuContent.map((item) =>
            item.id === selectedItem.id
                ? { ...item, isOpenNestedMenu: !item.isOpenNestedMenu }
                : { ...item, isOpenNestedMenu: false },
        ) as typeof sideMenuContent;

        setSideMenuContent(updatedSideMenu);
    };

    return (
        <aside className={`w-[400px] h-[100vh]  ${className} z-10`}>
            <div className={`w-[290px] bg-neutral-100  h-[100vh] fixed top-0 left-0 pt-[55px]`}>
                <ul
                    className="w-full mt-[24px] flex flex-col gap-[8px]"
                    suppressHydrationWarning={true}
                >
                    {sideMenuContent.map((item, index) => {
                        const isActive = isActiveRoute(item.routeKey);
                        const highlightTab = isActive ? activeLinkClassName : '';
                        const highlightText = isActive
                            ? '!text-primary-900 !font-600'
                            : '!text-neutral-800';

                        return (
                            <React.Fragment key={index * 2}>
                                <div>
                                    <li
                                        onClick={() => handleMenuClick(item)}
                                        className={`w-full py-[13px] pl-[24px] pr-[32px] flex items-center  justify-between ${highlightTab}`}
                                    >
                                        <Link
                                            prefetch={true}
                                            href="#"
                                            className="flex items-center gap-[8px] select-none"
                                            draggable={false}
                                        >
                                            <div className="w-[24px] h-[24px] bg-red-5000 flex items-center justify-center">
                                                {item.icon(isActive)}
                                            </div>
                                            <Typography
                                                variant="span"
                                                type="l6"
                                                className={highlightText}
                                            >
                                                {item.label}
                                            </Typography>
                                        </Link>
                                        {item.hasChildren && (
                                            <>
                                                {item.isOpenNestedMenu ? (
                                                    <UpArrow
                                                        color="#181818"
                                                        className="mt-[5px]"
                                                    />
                                                ) : (
                                                    <DownArrow
                                                        color="#181818"
                                                        className="mt-[5px]"
                                                    />
                                                )}
                                            </>
                                        )}
                                    </li>

                                    {item.isOpenNestedMenu && (
                                        <ul className="flex flex-col gap-[8px]">
                                            {item?.children?.map((child) => {
                                                const isActive = isActiveRoute(child.routeKey);
                                                const highlightTab = isActive
                                                    ? activeLinkClassName
                                                    : '';
                                                const highlightText = isActive
                                                    ? 'text-primary-900 !font-600'
                                                    : 'text-neutral-800';

                                                return (
                                                    <li
                                                        key={child.id}
                                                        className={`px-[40px] py-[9px] ${highlightTab}`}
                                                    >
                                                        <Link
                                                            prefetch={true}
                                                            href="#"
                                                        >
                                                            <Typography
                                                                variant="span"
                                                                type="l6"
                                                                className={highlightText}
                                                            >
                                                                {child.label}
                                                            </Typography>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export { SideMenu };
