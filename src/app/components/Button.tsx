import React from 'react'

export type Custombutton = {
    btnBg: string
    btnTextColour: string
    btnTextFont: string
    children?: React.ReactNode
    onClick?: () => void
}
export default function Button({ btnBg, btnTextColour, btnTextFont, children, onClick }: Custombutton) {
    return (
        <button onClick={onClick} className={`${btnBg} ${btnTextColour} w-fit px-4 py-3 rounded-sm ${btnTextFont}`} type="submit">
            {children}
        </button>
    )
}
