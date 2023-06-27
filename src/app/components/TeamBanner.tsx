import React from 'react'
import { doctors } from '../assets'

export default function TeamBanner() {
    return (
        <div id="team-banner" className='w-full bg-LIGHT_GRAY py-24'>
            <div className=''>
                <div className='py-4 text-center'>
                    <p className='text-4xl mx-96 font-semibold text-BLACK'>
                        {/* TODO : add shadow to this text */}
                        Our secret to great virtual care is great doctors
                    </p>
                    <p className='text-TEXT_GREY mx-72 opacity-70 py-7 mb-3'>
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
