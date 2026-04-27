import TimeLineProvider from '@/components/Context/TimeLineContext';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <TimeLineProvider>
            {children}
        </TimeLineProvider>
    );
};

export default Providers;