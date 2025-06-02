import React from 'react';
import { typographyClasses } from '@/design';

export type TypographyType =
    | 'd1'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'b1'
    | 'b2'
    | 'b3'
    | 'b4'
    | 'b5'
    | 'b6'
    | 'b7'
    | 'b8'
    | 'l1'
    | 'l2'
    | 'l3'
    | 'l4'
    | 'l5'
    | 'l6'
    | 'l7';

export interface TypographyProps {
    variant?: React.ElementType;
    children?: React.ReactNode;
    className?: string;
    type?: TypographyType;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Typography: React.FC<TypographyProps> = ({
    variant = 'p',
    children = '',
    className = '',
    type = 'h4',
    style,
    onClick,
}) => {
    const Component = variant;
    const typographyStyle =
        typographyClasses[type as keyof typeof typographyClasses] || typographyClasses['b1'];
    const customClassName = `${typographyStyle} ${className}`;

    return (
        <Component
            className={customClassName}
            style={style}
            onClick={onClick}
        >
            {children}
        </Component>
    );
};

export { Typography };
