import React from 'react'
import OfferCard from '../components/Offers/OfferCard'
import { offers } from '../data/offers'

export default function Offers() {
    return (
        <div id="our-services" className='w-full bg-GRAY_BACKGROUND py-10 sm:py-24'>
            <div className=''>
                <div className='sm:py-4 text-center'>
                    <h1 className='text-3xl font-semibold text-BLUE2'>
                        We're here for you
                    </h1>
                    <p className='text-TEXT_GREY mx-10 sm:mx-72 opacity-70 py-7 mb-3'>
                        Visits start at $79 for a 15 min consultation, or could be free depending on your insurance.
                        See costs for more information.
                    </p>
                </div>

                <div className='mx-10 sm:mx-32'>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-14 ">
                            {offers.map((item, index) => (
                                <OfferCard
                                    key={item.id}
                                    title={item.title}
                                    details={item.details}
                                />
                            ))}

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
