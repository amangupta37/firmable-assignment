import React from 'react';

const Builder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { color = '#181818' } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <ellipse
                cx="8.00016"
                cy="3.99967"
                rx="2.66667"
                ry="2.66667"
                stroke={color}
            />
            <ellipse
                cx="8.00016"
                cy="11.3337"
                rx="4.66667"
                ry="2.66667"
                stroke={color}
            />
        </svg>
    );
};

export { Builder };
