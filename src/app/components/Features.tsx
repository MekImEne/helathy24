import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../data/features';

export default function Features() {
    return (
        <section id='home' className="-mt-32 bg-gray-50 px-4 pb-20 pt-4 lg:mx-44 ">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 h-44 bg-BLUE2 text-WHITE">

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
