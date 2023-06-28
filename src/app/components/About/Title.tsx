import React from 'react';
import { logo } from '../../assets';

export default function Title({ text }: { text: string }) {
    return (
        <div className="flex flex-col sm:flex-row items-center mb-10">
            <h2 className="text-4xl sm:text-5xl mt-6 mr-8 sm:mr-3 font-medium text-TEXT_GREY "> {text} </h2>
            <img alt='healthy24+' src={logo} className='h-[5.5rem] sm:h-28 sm:w-auto' />
        </div>
    )
}
