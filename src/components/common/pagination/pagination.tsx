import React from 'react';
import ReactPaginate from 'react-paginate';
import { Button } from '../button/button';
import { UpArrow } from '@/assets/icons/up-arrow';
import { DownArrow } from '@/assets/icons/down-arrow';

export interface PaginationMeta {
    total: number;
    totalPages: number;
}

export interface PaginationProps {
    pageSize: number;
    setPageSize: (size: number) => void;
    pageSizes?: number[];
    currentPage: number;
    pageCount: number;
    setPageIndex: (page: number) => void;
    canPreviousPage: boolean;
    canNextPage: boolean;
    meta: PaginationMeta;
}

const Pagination: React.FC<PaginationProps> = ({
    pageSize,
    setPageSize,
    pageSizes = [5, 10, 20, 50],
    currentPage,
    pageCount,
    setPageIndex,
    canPreviousPage,
    canNextPage,
    meta,
}) => {
    const totalRows = meta.total || 0;
    const from = totalRows === 0 ? 0 : currentPage * pageSize + 1;
    const to = Math.min((currentPage + 1) * pageSize, totalRows);
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-neutral-200 bg-neutral-50">
            {/* Left: Page size selector */}
            <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Rows per page</span>
                <div className="relative">
                    <select
                        id="page-size-selector"
                        className="appearance-none w-20 pl-4 pr-8 py-2 rounded-lg border border-neutral-300 bg-white text-neutral-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer"
                        value={pageSize}
                        onChange={(e) => {
                            setPageIndex(0);
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {pageSizes.map((size) => (
                            <option
                                key={size}
                                value={size}
                            >
                                {size}
                            </option>
                        ))}
                    </select>
                    {/* Chevron icon */}
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                        <DownArrow
                            width={16}
                            height={16}
                            color="#8B8B8B"
                        />
                    </span>
                </div>
            </div>
            {/* Center: Pagination buttons using react-paginate */}
            <div className="flex items-center gap-1">
                <Button
                    variant="outline"
                    size="icon"
                    className="border-neutral-300 bg-white text-neutral-500 hover:bg-neutral-100 disabled:opacity-50"
                    onClick={() => setPageIndex(0)}
                    disabled={!canPreviousPage}
                    aria-label="First Page"
                    id="previous-page"
                >
                    <UpArrow
                        className="rotate-[-90deg]"
                        color="#8B8B8B"
                        width={16}
                        height={16}
                    />
                </Button>
                <ReactPaginate
                    id="pagination"
                    breakLabel={<span className="px-2 text-neutral-400">...</span>}
                    nextLabel={null}
                    onPageChange={({ selected }: { selected: number }) => setPageIndex(selected)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    forcePage={currentPage}
                    containerClassName="flex items-center gap-2 bg-white "
                    pageClassName=""
                    pageLinkClassName="w-10 h-10 flex items-center justify-center  border border-neutral-200 bg-white text-neutral-700 mx-1 text-base font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-0 focus:ring-blue-200 !cursor-pointer"
                    activeClassName="!bg-blue-600 !text-white !font-semibold  !border-blue-600"
                    activeLinkClassName="!bg-blue-600 !text-white !font-semibold  !border-blue-600"
                    breakClassName=""
                    previousLabel={null}
                    renderOnZeroPageCount={null}
                />
                <Button
                    variant="outline"
                    size="icon"
                    className="border-neutral-300 bg-white text-neutral-500 hover:bg-neutral-100 disabled:opacity-50"
                    onClick={() => setPageIndex(pageCount - 1)}
                    disabled={!canNextPage}
                    aria-label="Last Page"
                    id="next-page"
                >
                    <DownArrow
                        className="rotate-[-90deg]"
                        color="#8B8B8B"
                        width={16}
                        height={16}
                    />
                </Button>
            </div>
            {/* Right: Results info */}
            <div className="text-sm text-neutral-600">
                <span>
                    Showing <span className="font-semibold">{from}</span> to{' '}
                    <span className="font-semibold">{to}</span> of{' '}
                    <span className="font-semibold">{totalRows}</span> results
                </span>
            </div>
        </div>
    );
};

export { Pagination };
