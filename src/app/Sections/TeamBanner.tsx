import React from 'react'
import { doctors } from '../assets'

export default function TeamBanner() {
    return (
        <div id="team-banner" className='w-full bg-LIGHT_GRAY pt-10 sm:pt-24'>
            <div>
                <div className='py-0 sm:py-4 text-center'>
                    <p className='text-3xl sm:text-4xl mx-10 sm:mx-96 font-extrabold text-BLACK drop-shadow-lg shadow-BLACK'>
                        Our secret to great virtual care is great doctors
                    </p>
                    <p className='text-TEXT_GREY mx-10 sm:mx-72 opacity-70 py-7 mb-3'>
                        Board-certified | Top 5% of medical specialists in the world | +90% satisfaction rating
                    </p>
                </div>

                <div className="container mx-auto">
                    <img alt='team' src={doctors} className='w-full mt-14' />
                </div>
            </div>

        </div>
    )
}
