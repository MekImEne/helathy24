import React from 'react'
import Input from '../Input'
import Button from '../UI/Button'

export default function FormContact() {
    const handleSubmit = () => {
        console.log('====================================');
        console.log("Contacted");
        console.log('====================================');
    }
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

            <Button
                onClick={handleSubmit}
                text="Submit"
                bgColor='ORANGE'
                textColor='WHITE'
                type="submit"
            />
        </form>
    )
}
