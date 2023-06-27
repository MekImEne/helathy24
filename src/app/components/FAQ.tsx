import React from 'react'
import Accordion from './Accordion'
import { chat } from '../assets'
import AskQuestion from './AskQuestion'

export default function FAQ() {
    return (
        <div className='mx-20 items-start'>
            <div className='flex flex-row space-x-3 items-center'>
                <img alt="chat" src={chat} />
                <p className='text-DARK_GRAY font-semibold text-3xl'>FAQ</p>
            </div>
            <div className="my-10 flex ">
                <div className="-mt-8 w-full px-4 md:w-10/12">
                    <p className='font-medium text-TEXT_GREY text-base opacity-70 mx-0 mt-4 mb-10'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                    </p>
                    <Accordion />
                </div>
                <div className="flex w-full px-2 mx-20 md:w-5/12">

                    <AskQuestion />
                </div>
            </div>

        </div>
    )
}
