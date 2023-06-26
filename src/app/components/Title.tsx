import React from 'react';
import { logo } from '../assets';

export default function Title({ text }: { text: string }) {
    return (
        <div className="flex flex-row items-center mb-10">
            <h2 className="text-xl mt-6 font-medium text-TEXT_GREY sm:text-6xl"> {text} </h2>
            <img alt='healthy24+' src={logo} className='h-28 w-full xs:h-12 xs:w-20' />
        </div>
    )
}
