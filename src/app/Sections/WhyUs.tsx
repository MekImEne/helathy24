import React from 'react';
import Title from '../components/About/Title';
import { whyUs, medecine, check } from '../assets';
import { reasons } from '../data/whyUs';

export default function WhyUs() {
    return (
        <div id='why-us' className="my-32 mx-24 flex items-start">
            <div className="mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                <div className="flex flex-row relative">
                    <div className='absolute -mx-24 -z-10'>
                        <img
                            alt="CardImage"
                            src={medecine}
                            className="h-40 w-full mt-14"
                        />
                    </div>
                    <div>
                        <img
                            alt="CardImage"
                            src={whyUs}
                            className="sm:h-[31rem] h-full w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-2 -mt-8 w-full px-4 md:w-9/12">
                <Title text="Why choosing" />
                <p className="mb-8 font-normal text-base text-TEXT_GREY">
                    Meet with an urgent care doctor in minutes, 24/7.Schedule a session with a <span className='underline' >therapist or psychiatrist</span>  this week.
                </p>

                {
                    reasons.map((item, index) => (
                        <div key={index} className='flex flex-row space-x-5 items-center my-3'>
                            <img src={check} alt="check" className='h-3' />
                            <p className='text-TEXT_GREY font-normal text-base'>
                                {item.reason}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
