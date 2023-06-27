import React from 'react'
import { aboutUs } from '../../assets'
import LogoContainer from './LogoContainer'

export default function RightSideImage() {
    return (
        <div>
            <div className="relative">
                <img
                    alt="CardImage"
                    src={aboutUs}
                    className=" h-[21rem] sm:h-full w-full"
                />
            </div>
            <div>
                <div className='absolute -mt-10 -mx-10 sm:-mx-24'>
                    <LogoContainer />
                </div>
            </div>
        </div>
    )
}
