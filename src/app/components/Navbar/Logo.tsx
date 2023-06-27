import React from 'react'
import { logo } from '../../assets'

export default function Logo({ mobileMenuOpen }: { mobileMenuOpen: Boolean }) {
    return (
        <a href='/' className={`${mobileMenuOpen ? '-m-1.5 p-1.5' : 'flex lg:flex-1'}`}>
            <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Healthy 24+</span>
                <img className="h-8 w-auto" src={logo} alt="logo" />
            </a>
        </a>
    )
}
