import React from 'react'
import { frame } from '../assets'

export default function OfferCard({ title, details }: { title: string, details: Array<String> }) {
    return (
        <div className='bg-WHITE text-TEXT_GREY h-60 p-5'>
            <div className='flex flex-row justify-between'>
                <p className='text-xl font-medium text-TEXT_GREY'>
                    {title}
                </p>
                <img alt="frame" src={frame} />
            </div>

            <ul className="list-disc mx-7 mt-4" >
                {details.map((el, index) => (
                    <li className='py-1' key={index}>
                        {el}
                    </li>
                ))}
            </ul>
        </div>
    )
}
