import React from 'react'
import { searchDoctor } from '../assets'
import Button from '../components/UI/Button';

export default function FindDoctor() {

    const handleStart = () => {
        window.location.href = '/get-started'
    };

    return (
        <div id='find-doctor' className="my-20 mx-6 flex flex-wrap items-center">
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

                <Button
                    onClick={handleStart}
                    text="Get Started"
                    bgColor='WHITE'
                    textColor='BLUE2'
                    textHovered='WHITE'
                    rounded
                    outlined
                    borderColor="BLUE3"
                    bgHovered="BLUE3"
                />
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
