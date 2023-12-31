import React from 'react'
import { email, location, phone } from '../assets'
import FormContact from '../components/Contact/FormContact'
import ContactItem from '../components/Contact/ContactItem'

export default function Contact() {
    return (
        <div id='contact-us' className="mt-8 sm:mt-20 pb-10 px-10 sm:px-20 flex-wrap items-center w-full flex flex-row sm:space-x-20">
            <div className='md:w-6/12'>
                <div className='py-2 sm:py-4 flex flex-col justify-start'>

                    <h1 className='py-0 sm:py-3 text-3xl text-BLUE2 font-semibold'>
                        Contact us
                    </h1>
                    <p className='text-TEXT_GREY font-normal text-lg my-4 sm:my-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <FormContact />
                </div>
            </div>

            <div className='md:w-4/12 flex flex-col'>

                <h1 className='py-3 text-3xl sm:text-2xl text-BLUE2 font-semibold'>Available also on :</h1>

                <div className="divide-y divide-GRAY w-full">
                    <ContactItem icon={email} label="Email" content="Healthy 24.@Email.com" />
                    <ContactItem icon={location} label="Address" content="Lorem ipsum dolor sit amet, consectetur 33" />
                    <ContactItem icon={phone} label="Phone number" content="+1 (555) 000-0000" />
                </div>

            </div>
        </div>
    )
}
