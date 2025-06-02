import * as React from 'react';
import { InputProps } from '../input/input';
import { Spinner } from '@/assets';

interface SearchInputProps extends InputProps {
    loading?: boolean;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
    ({ className = '', loading = false, ...props }, ref) => {
        return (
            <div className="relative w-full">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
                    {/* Heroicons solid search icon SVG */}
                    <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                    >
                        <path
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.75 15.5a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5ZM16.25 16.25 13.5 13.5"
                        />
                    </svg>
                </span>
                <input
                    ref={ref}
                    type="text"
                    className={`h-10 w-full rounded-lg border border-neutral-200 bg-neutral-50 pl-12 pr-12 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${className}`}
                    placeholder={props.placeholder || 'Search...'}
                    aria-label={props['aria-label'] || 'Search'}
                    {...props}
                />
                {loading && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                        <Spinner className="w-[30px]" />
                    </span>
                )}
            </div>
        );
    },
);
SearchInput.displayName = 'SearchInput';

export { SearchInput };
