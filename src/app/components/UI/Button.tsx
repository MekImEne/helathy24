import React from 'react'

export default function Button({ bgColor, onClick, textColor, text }: {
    bgColor: string,
    textColor: string,
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}) {
    return (
        <button
            onClick={onClick}
            className={`rounded-none bg-${bgColor} hover:opacity-75 text-${textColor} py-2 px-8`}>
            {text}
        </button>
    )
}
