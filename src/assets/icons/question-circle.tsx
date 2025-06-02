import React from 'react';

const QuestionCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const { color = '#181818' } = props;

    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_5985_12405)">
                <circle
                    cx="7.99967"
                    cy="8.00016"
                    r="6.66667"
                    stroke={color}
                />
                <path
                    d="M6.75 5.9165C6.75 5.22615 7.30964 4.6665 8 4.6665C8.69036 4.6665 9.25 5.22615 9.25 5.9165C9.25 6.3748 9.00336 6.77549 8.63558 6.99309C8.31869 7.18057 8 7.46498 8 7.83317V8.6665"
                    stroke={color}
                    strokeLinecap="round"
                />
                <ellipse
                    cx="7.99967"
                    cy="10.6667"
                    rx="0.666667"
                    ry="0.666667"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_5985_12405">
                    <rect
                        width="16"
                        height="16"
                        fill="white"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export { QuestionCircle };
