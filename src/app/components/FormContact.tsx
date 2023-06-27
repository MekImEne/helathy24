import React from 'react'
import Input from './Input'

export default function FormContact() {
    return (
        <form className='py-4'>
            <Input
                label="Full name"
                placeholder='Your name'
                id='fullname'
                name='fullname'
            />
            <Input
                label="Email"
                placeholder='Your email address'
                id='email'
                name='email'
            />

            <Input
                label="Message"
                placeholder='Type your message...'
                id='message'
                name='message'
                multiline
            />

            <button
                className='max-md:w-full my-4 px-10 py-3 rounded-none bg-ORANGE text-WHITE font-light'
                type="submit"
            >
                Submit
            </button>

        </form>
    )
}
