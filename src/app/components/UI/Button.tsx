import React from 'react'

export default function Button({
    bgColor, onClick, textColor, text, outlined, rounded, borderColor, textHovered, bgHovered
}: {
    bgColor: string,
    textColor: string,
    text: string,
    outlined?: Boolean,
    rounded?: Boolean,
    borderColor?: string,
    textHovered?: string,
    bgHovered?: string,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}) {
    return (
        <button
            onClick={onClick}
            className={`             
                bg-${bgColor} 
                py-2 px-8
                text-${textColor}
                hover:text-${textHovered}
                hover:bg-${bgHovered}
                hover:opacity-75  
                ${outlined ? `outline outline-1 outline-${borderColor}` : 'outline-none'} 
                ${rounded ? 'rounded' : 'rounded-none'}`
            }
        >
            {text}
        </button>
    )
}
