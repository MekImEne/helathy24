import React from 'react'
import { footerSections } from '../data/footer'

export default function FooterSections() {
    return (
        <div className="w-full px-4 lg:w-6/12 grid grid-cols-2 gap-3">
            {
                footerSections.map((section, index) => (
                    <div key={index}>
                        <h3 className='text-FOOTER_GRAY text-base font-bold mb-5'>
                            {section.title}
                        </h3>
                        {
                            section.links.map((link, index) => (
                                <p key={index} className='text-COPYRIGHT_GRAY text-base font-normal mb-1'>
                                    {link}
                                </p>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}
