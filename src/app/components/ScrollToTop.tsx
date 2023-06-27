import React, { useEffect, useState } from 'react'
import { goTop } from '../assets';

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
}

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])


    return (
        <div className="fixed bottom-7 right-28 sm:right-20">
            <button
                type="button"
                onClick={scrollToTop}
                className={classNames(
                    isVisible ? 'opacity-100' : 'opacity-0',
                    'inline-flex items-center transition-opacity',
                )}
            >
                <img alt="goTop" src={goTop} />
            </button>
        </div>

    )
}
