import React, { useState } from 'react';
import Services from './Services';
import Subject from './Subject';

const SerSub = ({activeComponent,setActiveComponent}) => {

    return (
        <div className='relative max-[1570px]:px-8 SerSub' id="subject">
            <div className='flex text-2xl justify-center py-4'>
                <div
                    className={`bg-gray-200 p-2 rounded-md font-semibold font-sans cursor-pointer ${activeComponent === 'subject' ? 'bg-gray-600 text-white px-4' : 'hover:bg-gray-400'}`}
                    onClick={() => setActiveComponent('subject')}
                >
                    Subject
                </div>
                <div
                    className={`bg-gray-200 p-2 rounded-md font-semibold font-sans cursor-pointer ${activeComponent === 'service' ? 'bg-gray-600 text-white px-4' : 'hover:bg-gray-400'}`}
                    onClick={() => setActiveComponent('service')}
                >
                    Service
                </div>
            </div>

            <div> 
                {activeComponent === 'service' && <Services />}
                {activeComponent === 'subject' && <Subject />}
            </div>
        </div>
    );
}

export default SerSub;
