import React from 'react'
import { whiteLogo } from '../../assets'

export default function LogoContainer() {
    return (
        <div className='pb-16 pl-5 rounded-none h-14 w-44 bg-BLUE items-center justify-center'>
            <img src={whiteLogo} alt="logo" />
        </div>
    )
}
