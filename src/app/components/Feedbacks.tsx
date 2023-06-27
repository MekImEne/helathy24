import React from 'react'
import { ratingy } from '../assets'
import Carousel from './Carousel'

export default function Feedbacks() {
    return (
        <section className="relative my-10 w-full isolate overflow-hidden bg-[url('/src/app/assets/images/doctors-bg.jpg')] px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-5xl h-[33rem] bg-WHITE p-10">
                <div className='flex flex-col justify-center text-center content-center'>
                    <p className='text-ORANGE font-semibold text-base'>Testimonial</p>
                    <div className='border-b-2 w-36 border-ORANGE opacity-50 mx-auto py-2' />

                </div>
                <figure className="mt-10">
                    <div className="text-center text-2xl font-semibold leading-8 text-TEXT_GREY sm:text-2xl sm:leading-9">
                        <p>You're in safe hands</p>
                        <img
                            alt='rating'
                            src={ratingy}
                            className='mx-auto my-4 h-7 w-96' />
                    </div>
                    <Carousel />
                </figure>
            </div>
        </section>
    )
}
