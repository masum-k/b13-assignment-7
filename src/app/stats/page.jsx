"use client";

import { TimeLineContext } from '@/components/Context/TimeLineContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {
    const { timeLineAdded } = useContext(TimeLineContext);

    const callCount = timeLineAdded.filter(item => item.action === "Call").length;
    const textCount = timeLineAdded.filter(item => item.action === "Text").length;
    const videoCount = timeLineAdded.filter(item => item.action === "Video").length;

    const data = [
        { name: 'Call', value: callCount, fill: '#0088FE' },
        { name: 'Text', value: textCount, fill: '#00C49F' },
        { name: 'Video', value: videoCount, fill: '#FFBB28' },
    ];
    return (
        <div className="w-full text-center my-10">
            <h1 className="text-3xl font-bold mb-4">Stats</h1>
            <div>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;