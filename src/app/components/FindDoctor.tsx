import React from 'react'
import { searchDoctor } from '../assets'

export default function FindDoctor() {
    const handleStart = () => {
        window.location.href = '/get-started'
    }
    return (
        <div id='find-doctor' className="my-20 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                <h2 className='mb-6 font-medium text-3xl text-TEXT_GREY'>
                    Find The Best doctor you need
                </h2>
                <p className="mb-10 font-normal text-base text-TEXT_GREY">
                    From rashes to colds, stress management to diabetes management,
                    individual treatment plans are created around you.
                    Our medical and mental health providers work together, keeping your personal
                    journey protected and connected.
                </p>

                <button
                    onClick={handleStart}
                    className='rounded outline outline-1 outline-BLUE3 bg-WHITE hover:bg-BLUE3 text-BLUE2 hover:text-WHITE py-2 px-8'>
                    Get Started
                </button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                <div className="">
                    <div className="relative">
                        <img
                            alt="CardImage"
                            src={searchDoctor}
                            className="h-full w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
