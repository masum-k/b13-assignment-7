"use client"
import React, { createContext, useState } from 'react';

export const TimeLineContext = createContext()
const TimeLineProvider = ({ children }) => {
    const [timeLineAdded, setTimeLineAdded] = useState([])

    const data = {
        timeLineAdded,
        setTimeLineAdded,
    };

    return (
        <TimeLineContext.Provider value={data}>
            {children}
        </TimeLineContext.Provider>
    );
};

export default TimeLineProvider;