import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../../data/features';

export default function Features() {
    return (
        <section className="-mt-40 sm:-mt-32 px-4 pb-5 sm:pb-20 mx-9 pt-4 lg:mx-44 ">
            <div className="container mx-auto">
                <div className='flex flex-col sm:flex-row space-x-0 min-h-full bg-BLUE2 text-WHITE'>
                    {features.map(({ icon, description }) => (
                        <FeatureCard
                            key={description}
                            icon={icon}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
