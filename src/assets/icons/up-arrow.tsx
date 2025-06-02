import React from 'react';

const UpArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { color = '#181818', strokeWidth = '1.5' } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            {...props}
        >
            <path
                d="M11.0832 8.75L6.99984 5.25L2.9165 8.75"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { UpArrow };
