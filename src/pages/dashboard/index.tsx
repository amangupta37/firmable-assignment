import React, { useEffect, useState } from 'react';
import { SearchInput, Table } from '@/components';
import { useGetAllMetrics } from '@/services';
import { useDebounce } from '@/hooks/use-debounce';
import { formatToIST } from '@/utils';

interface MetricsData {
    DeviceID: string;
    AirTemperature: number;
    BarometricPressure: number;
    RelativeHumidity: number;
    LocalTimestamp: string;
}

const columns: import('@tanstack/react-table').ColumnDef<MetricsData, unknown>[] = [
    { accessorKey: 'DeviceID', header: 'Device ID' },
    { accessorKey: 'AirTemperature', header: 'Air Temperature' },
    { accessorKey: 'BarometricPressure', header: 'Barometric Pressure' },
    { accessorKey: 'RelativeHumidity', header: 'Relative Humidity' },
    {
        accessorKey: 'LocalTimestamp',
        header: 'Local Timestamp',
        cell: (info) => formatToIST(info.getValue() as string),
    },
];

const Dashboard = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 1000);

    const getAllMetricsHandlers = {
        onSuccess: () => {},
        onError: () => {},
    };

    const {
        isPending: isGetAllMetricsLoading,
        data: fetchedMetricsDetails,
        mutate: onFetchGetAllMetrics,
    } = useGetAllMetrics(getAllMetricsHandlers);

    const tableData = fetchedMetricsDetails?.data || [];
    const meta = fetchedMetricsDetails?.meta || {};
    const totalPages = meta.totalPages || 1;

    useEffect(() => {
        onFetchGetAllMetrics({ page, limit, search: debouncedSearch } as any);
    }, [page, limit, debouncedSearch]);

    return (
        <div>
            <div className="px-[20px] py-[20px] bg-white-900 flex flex-col gap-[20px]">
                <div className="w-[400px]">
                    <SearchInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        loading={isGetAllMetricsLoading}
                        placeholder="Search by Air Temperature or Relative Humidity"
                    />
                </div>
                <Table
                    columns={columns}
                    data={tableData}
                    manualPagination
                    pageCount={totalPages}
                    pageIndex={page - 1}
                    pageSize={limit}
                    onPaginationChange={({ pageIndex, pageSize }) => {
                        setPage(pageIndex + 1);
                        setLimit(pageSize);
                    }}
                    isLoading={isGetAllMetricsLoading}
                />
            </div>
        </div>
    );
};

export default Dashboard;
