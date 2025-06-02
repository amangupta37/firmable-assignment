import React from 'react';

const Hamburger: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { color = '#ffffff' } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            {...props}
        >
            <path
                d="M23.332 8.16797L4.66536 8.16797"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M23.332 14L4.66536 14"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M23.332 19.832L4.66536 19.832"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
};

export { Hamburger };
