import React from 'react'
import { appStore, googlePlay, rating } from '../assets'

export default function GetApp() {
    return (
        <div className='w-full flex flex-col sm:flex-row sm:space-x-32 mb-10 bg-[url("/src/app/assets/images/blue-background.jpg")] py-3 sm:py-10 px-10 sm:px-28'>
            <div className='md:w-5/12'>
                <div className='py-4 flex flex-col justify-start'>
                    <h1 className='py-3 text-4xl text-WHITE font-semibold'>Get the app</h1>
                    <p className='text-WHITE font-normal text-xl'>Rated 4.9 out of 5 by more than 150k reviewers.</p>
                    <p className='text-WHITE font-light text-base pt-5'>Register in the app and be ready to see a doctor, therapist or psychiatrist anytime, anywhere. Available for iPhone and Android.</p>
                </div>
            </div>
            <div className='md:w-5/12'>
                <div className='py-4'>
                    <div className='flex flex-row space-x-5 justify-end'>
                        <a href="/"><img alt='app-store' src={appStore} /></a>
                        <a href="/"><img alt='google-play' src={googlePlay} /></a>
                    </div>
                    <div className='mt-7 flex flex-row space-x-5 justify-end'>
                        <p className='text-WHITE font-semibold text-2xl'>4.9</p>
                        <img src={rating} alt="rating" />
                    </div>
                    <p className='text-WHITE text-right font-light text-base pt-2'>190.7k Rating</p>
                </div>
            </div>
        </div>
    )
}
