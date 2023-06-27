import React from 'react'

export default function Background() {
    return (
        <div>
            <div className="absolute top-0 h-[600px] w-full bg-[url('/src/app/assets/images/main.jpg')] bg-cover bg-center" />
            <div className="absolute top-0 h-[600px] w-full bg-gradient-to-r from-WHITE via-WHITE via-25% to-TRANSPARENT bg-cover bg-center" />
        </div>
    )
}
