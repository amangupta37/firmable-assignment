import React from 'react';

const DownArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { color = '#8B8B8B', strokeWidth = '1.5' } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            {...props}
        >
            <path
                d="M11.0833 5.25L7 8.75L2.91667 5.25"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { DownArrow };
