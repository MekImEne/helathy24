import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Logo from '../components/Navbar/Logo';
import HamburgerMenu from '../components/Navbar/HamburgerMenu';
import ServiceContact from '../components/Navbar/ServiceContact';
import LinkItems from '../components/Navbar/LinkItems';

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
                <Logo mobileMenuOpen={mobileMenuOpen} />

                <div className="flex lg:hidden">
                    <HamburgerMenu
                        setMobileMenuOpen={setMobileMenuOpen}
                        mobileMenuOpen={mobileMenuOpen}
                    />
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    <LinkItems isMobile={false} />
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ServiceContact />
                </div>


            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full h-[80%] overflow-y-auto bg-WHITE px-6  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Logo mobileMenuOpen={mobileMenuOpen} />

                        <HamburgerMenu
                            setMobileMenuOpen={setMobileMenuOpen}
                            mobileMenuOpen={mobileMenuOpen}
                        />
                    </div>

                    <div className="mt-5 flow-root">
                        <div className="-my-6 divide-y divide-GRAY">
                            <div className="space-y-2 py-3">
                                <LinkItems isMobile={true} />
                            </div>

                            <div className="py-6">
                                <ServiceContact />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
