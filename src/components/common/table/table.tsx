import React, { useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
    ColumnDef,
    PaginationState,
    OnChangeFn,
} from '@tanstack/react-table';
import { Typography } from '../typography/typography';
import { Pagination } from '../pagination/pagination';

export interface TableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T, unknown>[];
    className?: string;
    emptyText?: string;
    manualPagination?: boolean;
    pageCount?: number;
    pageIndex?: number;
    pageSize?: number;
    onPaginationChange?: (pagination: { pageIndex: number; pageSize: number }) => void;
    isLoading?: boolean;
}

const Table = <T extends object>({
    data,
    columns,
    className = '',
    emptyText = 'No data',
    manualPagination = false,
    pageCount: externalPageCount,
    pageIndex: externalPageIndex,
    pageSize: externalPageSize,
    onPaginationChange,
    isLoading = false,
}: TableProps<T>) => {
    const [internalPagination, setInternalPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });
    const pagination =
        typeof externalPageIndex === 'number' && typeof externalPageSize === 'number'
            ? { pageIndex: externalPageIndex, pageSize: externalPageSize }
            : internalPagination;

    const handlePaginationChange: OnChangeFn<PaginationState> = (updaterOrValue) => {
        if (onPaginationChange) {
            if (typeof updaterOrValue === 'function') {
                // Not supported for external pagination
                return;
            } else {
                onPaginationChange(updaterOrValue);
            }
        } else {
            setInternalPagination(updaterOrValue as PaginationState);
        }
    };

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination,
        pageCount: manualPagination ? externalPageCount : undefined,
        onPaginationChange: handlePaginationChange,
        state: { pagination },
    });

    const pageCount = manualPagination ? externalPageCount || 1 : table.getPageCount();
    const currentPage = pagination.pageIndex;
    const pageSize = pagination.pageSize;
    const _totalRows = table.getFilteredRowModel().rows.length;

    return (
        <div
            className={`w-full overflow-x-auto rounded-lg border border-neutral-200 bg-white shadow-table ${className}`}
        >
            <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 tracking-wider uppercase"
                                >
                                    {header.isPlaceholder ? null : (
                                        <Typography type="b4">
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                        </Typography>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="bg-white divide-y divide-neutral-100">
                    {isLoading ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="px-6 py-8 text-center text-neutral-400"
                            >
                                <Typography type="b3">Loading...</Typography>
                            </td>
                        </tr>
                    ) : table.getRowModel().rows.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="px-6 py-8 text-center text-neutral-400"
                            >
                                <Typography type="b3">{emptyText}</Typography>
                            </td>
                        </tr>
                    ) : (
                        table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                className="hover:bg-neutral-50 transition-colors"
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900"
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <Pagination
                pageSize={pageSize}
                setPageSize={(size: number) =>
                    handlePaginationChange({ pageIndex: currentPage, pageSize: size })
                }
                currentPage={currentPage}
                pageCount={pageCount}
                setPageIndex={(page: number) =>
                    handlePaginationChange({ pageIndex: page, pageSize })
                }
                canPreviousPage={table.getCanPreviousPage()}
                canNextPage={table.getCanNextPage()}
                meta={{ total: _totalRows, totalPages: pageCount }}
            />
        </div>
    );
};

export { Table };
