import React from 'react';
import { NextPageContext } from 'next';

const Error = ({ statusCode }: { statusCode?: number }) => {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server (Pages Router)`
                : 'An error occurred on client (Pages Router)'}
        </p>
    );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
