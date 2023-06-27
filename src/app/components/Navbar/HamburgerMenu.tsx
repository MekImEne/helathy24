import React from 'react'

export default function HamburgerMenu({ setMobileMenuOpen, mobileMenuOpen }: { setMobileMenuOpen: Function, mobileMenuOpen: Boolean }) {
    return (
        <>
            <button
                type="button"
                className={`${!mobileMenuOpen ? "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-TEXT_GREY" : "-m-2.5 rounded-md px-2.5 py-0 text-TEXT_GREY"}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <span className="sr-only">{!mobileMenuOpen ? "Open main menu" : "Close menu"}</span>
                {
                    !mobileMenuOpen ?
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        :
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                }
            </button>
        </>
    )
}
