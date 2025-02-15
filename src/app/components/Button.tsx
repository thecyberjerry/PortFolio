import React from 'react'

export type Custombutton = {
    btnBg: string
    btnTextColour: string
    btnTextFont: string
    children?: React.ReactNode
    onClick?: () => void
    disabled?: boolean
}
export default function Button({ btnBg, btnTextColour, btnTextFont, children, onClick, disabled }: Custombutton) {
    return (
        <button disabled={disabled} onClick={onClick} className={`${btnBg} ${btnTextColour} w-fit px-4 py-3 rounded-sm ${disabled && "bg-slate-400"} ${btnTextFont}`} type="submit">
            {children}
        </button>
    )
}
