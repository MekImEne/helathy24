import React from 'react';
import Features from './Features';

export default function Banner() {
    return (
        <div id='home'>
            <div className="relative flex h-screen content-center items-center pt-16 pb-32 -z-10">
                <div className="absolute top-0 h-[600px] w-full bg-[url('/src/app/assets/images/main.jpg')] bg-cover bg-center" />
                <div className="absolute top-0 h-[600px] w-full bg-gradient-to-r from-WHITE via-WHITE via-25% to-TRANSPARENT bg-cover bg-center" />

                <div className="max-w-7xl px-6 lg:px-8 z-0 ">
                    <div className="max-w-2xl lg:mx-0">
                        <h2 className="text-5xl font-normal tracking-tight text-TEXT_GREY sm:text-6xl">Feel Better about</h2>
                        <h2 className="text-5xl font-normal tracking-tight text-TEXT_GREY sm:text-6xl">Finding <span className="text-BLUE font-semibold">Healthcare</span> </h2>
                        <p className="mt-8 text-lg leading-7 text-TEXT_GREY">
                            Healththy 24 Online ranks highest in telehealth satisfaction among direct-to-consumer brands.
                        </p>
                    </div>
                    <div className="mt-20 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 font-normal leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
                            <button className="rounded-none bg-ORANGE hover:bg-ORANGE-700 text-WHITE py-2 px-8">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <Features />
        </div>

    )
}
