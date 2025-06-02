// pages/api/data.js
import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, 
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { page = 1, limit = 10 } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
    const from = (pageNumber - 1) * pageSize;
    const to = from + pageSize - 1;

    const { search } = req.query;

    let query = supabase
        .from('temp-data')
        .select('*', { count: 'exact' });

    if (search && typeof search === 'string') {
        const searchDecimal = parseFloat(search);
        if (!isNaN(searchDecimal) && isFinite(searchDecimal)) {
            query = query.or(`RelativeHumidity.ilike.%${search}%,AirTemperature.ilike.%${search}%`);
        } else {
            query = query.ilike('DeviceID', `%${search}%`);
        }
    }

    query = query.range(from, to);

    const { data, error, count } = await query;

    console.log(data, error, count);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json({
        data,
        meta: {
            page: pageNumber,
            limit: pageSize,
            total: count,
            totalPages: Math.ceil((count ?? 0) / pageSize),
        },
    });
}
