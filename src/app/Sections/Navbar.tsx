/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { calling, logo } from '../assets'
import { Link } from 'react-scroll';
import { navbarItems } from '../data/header';

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Healthy 24+</span>
                        <img className="h-8 w-auto" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {
                            !mobileMenuOpen ?
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg> :
                                null
                        }
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {
                        navbarItems.map((item, index) =>
                            <a key={item.id} href="#" className="text-sm font-normal leading-6 text-gray-900">
                                <Link to={item.id} spy={true} smooth={true}>
                                    {item.label}
                                </Link>
                            </a>
                        )
                    }
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div className="flex items-center">
                        <img alt="calling" src={calling} />
                        <div className='px-3'>
                            <span className='text-xs text-GRAY'>Service disponible</span>
                            <p className='text-sm text-BLACK'>0453 628 125</p>
                        </div>
                    </div>
                </div>


            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-WHITE px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Healthy 24+</span>
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt="logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {
                                    navbarItems.map((item, index) =>
                                        <a key={item.id} href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50">
                                            <Link to={item.id} spy={true} smooth={true}>
                                                {item.label}
                                            </Link>
                                        </a>
                                    )
                                }
                            </div>

                            <div className="py-6">
                                <div className="flex items-center">
                                    <img alt="calling" src={calling} />
                                    <div className='px-3'>
                                        <span className='text-xs text-GRAY'>Service disponible</span>
                                        <p className='text-sm text-BLACK'>0453 628 125</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
