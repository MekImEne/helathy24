import React from 'react';
import { logo } from '../assets';

export default function Title({ text }: { text: string }) {
    return (
        <div className="flex flex-row items-center mb-10">
            <h2 className="text-4xl mt-6 mr-3 font-medium text-TEXT_GREY sm:text-5xl"> {text} </h2>
            <img alt='healthy24+' src={logo} className='h-28 w-auto xs:h-12 xs:w-20' />
        </div>
    )
}
