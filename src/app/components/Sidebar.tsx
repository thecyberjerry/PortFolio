import React from 'react';
import { NavbarSlice } from '../../../prismicio-types';
import Link from 'next/link';
import { asLink } from '@prismicio/helpers';
import { Scrolltobottom } from '../utils/scrolltobottom';

type SidebarProps = {
    setShowSidebar: (showSidebar: boolean) => void;
    showSidebar: boolean;
    slice: NavbarSlice
};

export default function Sidebar({ setShowSidebar, showSidebar, slice }: SidebarProps) {
    return (
        <div
            className={`${slice.primary.sidebar_font_family} fixed z-50 h-full w-full left-0 top-0 bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out ${showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div
                className={`bg-white flex flex-col w-full h-full transition-transform duration-700 ease-in-out transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <button className='flex justify-end px-4 text-2xl' onClick={() => setShowSidebar(false)}>X</button>
                <div className={`flex flex-col gap-6 justify-center h-full text-3xl items-center`}>
                    {slice.primary.sidebar_content.map((item, index) => (
                        <Link onClick={() => setShowSidebar(false)} className={`hover:underline transition-all duration-300 ease-in-out`} key={index} href={asLink(item.navigation_link) as string}>{item.title}</Link>
                    ))}
                    {slice.primary.show_contact_link && slice.primary.contact_button_text && <button className={`hover:underline transition-all duration-300 ease-in-out`} onClick={() => { Scrolltobottom(); setShowSidebar(false); }}>
                        {slice.primary.contact_button_text}
                    </button>}
                </div>
            </div>
        </div>
    );
}
