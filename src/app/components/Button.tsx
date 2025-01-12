import React from 'react'

export type Custombutton = {
    btnBg: string
    btnTextColour: string
    btnTextFont: string
    children?: React.ReactNode
}
export default function Button({ btnBg, btnTextColour, btnTextFont, children }: Custombutton) {
    return (
        <button className={`${btnBg} ${btnTextColour} w-fit px-4 py-3 rounded-sm ${btnTextFont}`} type="submit">
            {children}
        </button>
    )
}
