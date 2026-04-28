import { TimeLineContext } from '@/components/Context/TimeLineContext';
import React, { useContext } from 'react';
import { PiChatTextBold, PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';

const TimeLineButton = ({ name }) => {

    const { timeLineAdded, setTimeLineAdded } = useContext(TimeLineContext)
    const timeLineData = (action) => {
        setTimeLineAdded([...timeLineAdded, { name, action }])
    }

    return (
        <>
            <div onClick={() => timeLineData("Call")} className=' w-52 mx-auto card items-center cursor-pointer py-3 bg-base-200 shadow'>
                <PiPhoneCallBold size={20} /><p>Call</p>
            </div>
            <div onClick={() => timeLineData("Text")} className='w-52 mx-auto card items-center cursor-pointer py-3 bg-base-200 shadow'>
                <PiChatTextBold size={20} /><p>Text</p>
            </div>
            <div onClick={() => timeLineData("Video")} className='w-52 mx-auto card items-center cursor-pointer py-3 bg-base-200 shadow'>
                <PiVideoCameraBold size={20} /> <p>Video</p>
            </div>
        </>
    );
};

export default TimeLineButton;