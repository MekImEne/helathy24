import React from 'react'
import { InputProps } from '../../data/types'

export default function Input({ label, id, name, placeholder, value, multiline, onChange, ...props }: InputProps) {
    return (
        <div className='mb-7'>
            <label className=' text-TEXT_GREY font-normal text-base'>
                {label}
            </label>
            {
                multiline ?
                    <textarea
                        className='bg-GRAY_BACKGROUND p-4 mt-2 w-full rounded resize-none'
                        placeholder={placeholder}
                        rows={5}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                    : <input
                        className='bg-GRAY_BACKGROUND p-4 mt-2 w-full rounded'
                        placeholder={placeholder}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
            }

        </div>
    )
}
