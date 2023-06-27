/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { navbarItems } from '../../data/header'
import { Link } from 'react-scroll'

export default function LinkItems({ isMobile }: { isMobile: Boolean }) {
    return (
        <>
            {
                navbarItems.map((item, index) =>
                    <a
                        key={item.id}
                        href="#"
                        className={`${!isMobile ? "text-sm font-normal leading-6 text-TEXT_GREY" : "-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-TEXT_GREY hover:bg-LIGHT_GRAY"}`}
                    >
                        <Link to={item.id} spy={true} smooth={true}>
                            {item.label}
                        </Link>
                    </a>
                )
            }
        </>
    )
}
