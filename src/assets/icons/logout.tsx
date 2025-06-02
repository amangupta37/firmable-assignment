import React from 'react';

const Logout: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { color = '#C63434' } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <path
                d="M5.93335 5.04016C6.14002 2.64016 7.37335 1.66016 10.0733 1.66016H10.16C13.14 1.66016 14.3333 2.85349 14.3333 5.83349V10.1802C14.3333 13.1602 13.14 14.3535 10.16 14.3535H10.0733C7.39335 14.3535 6.16002 13.3868 5.94002 11.0268"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10 8H2.41333"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.89996 5.7666L1.66663 7.99994L3.89996 10.2333"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export { Logout };
