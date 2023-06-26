import React from 'react'
import Title from './Title'
import LogoContainer from './LogoContainer'
import { aboutUs } from '../assets'

export default function AboutUs() {
    return (
        <div id='about-us' className="my-10 flex flex-wrap items-start">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                <Title text="About" />
                <p className="mb-8 font-normal text-base text-TEXT_GREY ">
                    With 24/7 access to online doctors, psychiatrists, psychologists,
                    therapists and other medical experts, care is always available, anytime and anywhere.
                    Select and see your favorite providers again and again, right from your smartphone, tablet or computer.
                    <br />
                    <br />
                    Better yet, Doctor On Demand is a covered benefit for over
                    98 million Americans by their health plan or employer.
                    It's free to sign up and easy to check your coverage when you register.
                </p>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                <div className="">
                    <div className="relative">
                        <img
                            alt="CardImage"
                            src={aboutUs}
                            className="h-full w-full"
                        />
                    </div>
                    <div>
                        <div className='absolute -mt-10 -mx-24'>
                            <LogoContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
