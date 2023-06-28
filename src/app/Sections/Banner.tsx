import React from 'react';
import Background from '../components/Banner/Background';
import MainTitle from '../components/Banner/MainTitle';
import Button from '../components/UI/Button';
import Features from '../components/Banner/Features';

export default function Banner() {

    const handleStart = () => {
        window.location.href = '/'
    };

    return (
        <div id='home'>
            <div className="relative flex h-screen content-center items-center pt-16 pb-32 -z-10">
                <Background />
                <div className="max-w-7xl px-6 lg:px-8 z-0 py-3">
                    <MainTitle />
                    <div className="mt-10 sm:mt-20 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 font-normal leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
                            <Button
                                onClick={handleStart}
                                text="Get Started"
                                bgColor='ORANGE'
                                textColor='WHITE'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Features />
        </div>

    )
}
