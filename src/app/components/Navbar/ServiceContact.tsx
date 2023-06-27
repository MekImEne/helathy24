import React from 'react'
import { calling } from '../../assets'

export default function ServiceContact() {
    return (
        <div className="flex items-center">
            <img alt="calling" src={calling} />
            <div className='px-3'>
                <span className='text-xs text-GRAY'>Service disponible</span>
                <p className='text-sm text-BLACK'>0453 628 125</p>
            </div>
        </div>

    )
}
