import React from 'react';

const UserProfile: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <g clipPath="url(#clip0_2373_37802)">
                <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="#1A49B7"
                    fillOpacity="0.3"
                />
                <path
                    opacity="0.8"
                    d="M34 41.5C34 51.165 26.165 59 16.5 59C6.83502 59 -1 51.165 -1 41.5C-1 31.835 6.83502 24 16.5 24C26.165 24 34 31.835 34 41.5Z"
                    fill="#D4E0FD"
                />
                <path
                    opacity="0.8"
                    d="M22 15C22 18.3137 19.3137 21 16 21C12.6863 21 10 18.3137 10 15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15Z"
                    fill="#D4E0FD"
                />
            </g>
            <defs>
                <clipPath id="clip0_2373_37802">
                    <rect
                        width="32"
                        height="32"
                        rx="16"
                        fill="white"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export { UserProfile };
