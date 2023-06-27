import React from 'react'
import { doctor, faq } from '../assets'

export default function AskQuestion() {

    const handleContact = () => {
        window.location.href = "contact-us"
    };

    return (
        <div className="">
            <div className="relative h-56">
                <img
                    alt="CardImage"
                    src={faq}
                    className="h-full w-full"
                />
            </div>
            <div className='bg-gradient-to-b from-BLUE to-BLUE3 text-WHITE p-6'>
                <p className="mb-3 font-semibold text-lg">
                    Still have a question?
                </p>
                <p className="font-light text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className='mt-4 flex flex-row justify-between content-center items-center'>
                    <button
                        onClick={handleContact}
                        className="rounded-none bg-WHITE hover:bg-ORANGE-700 text-TEXT_GREY py-2 px-5">
                        Contact us
                    </button>
                    <img alt="doctor" src={doctor} />
                </div>

            </div>
        </div >
    )
}
