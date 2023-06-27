import React from 'react'

export default function ContactItem({ icon, label, content }: { icon: string, label: string, content: string }) {
    return (
        <div className=" py-6">
            <div className="flex items-start">
                <img alt="email" src={icon} className='mt-1 pr-4' />
                <div className='px-3'>
                    <span className='text-xl font-medium text-TEXT_GREY'>
                        {label}
                    </span>
                    <p className='text-sm font-normal text-GRAY'>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}
