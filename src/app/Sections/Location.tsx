import React from 'react'
import { LOCATION } from '../data/constants'

export default function Location() {
    return (
        <div id="map" className='w-full mb-10 h-[430px]' >
            <iframe
                title="map"
                src={LOCATION}
                className='w-full h-full'
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    )
}
