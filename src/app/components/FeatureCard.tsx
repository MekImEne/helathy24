import React from 'react'
import { FeatureItemProps } from '../data/interfaces'

export default function FeatureCard({ icon, description }: FeatureItemProps) {
    return (
        <div className="w-full max-w-sm hover:bg-gradient-to-b from-BLUE3 to-BLUE4 hover:border-b-4 hover:border-b-ORANGE scale-90 hover:scale-100 ease-in duration-500">
            <div className="pt-10 flex flex-col content-center items-center justify-center justify-items-center">
                <img className="w-12 h-12 mb-3" alt="" src={icon} />
                <span className="text-base text-WHITE text-center"> {description} </span>
            </div>
        </div>

    )
}
