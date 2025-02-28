"use client"
import Sidebar from "@/app/components/Sidebar";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { useRouter } from "next/navigation";
import { useState, type JSX } from "react";
/**
 * Props for `Navbar`.
 */
export type NavbarProps = SliceComponentProps<Content.NavbarSlice>;

/**
 * Component for "Navbar" Slices.
 */
const Navbar = ({ slice }: NavbarProps): JSX.Element => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-between items-center shadow-xl rounded-b-lg sticky top-0 z-50 bg-white"
    >
      <Sidebar slice={slice} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {slice?.primary && <PrismicNextImage field={slice.primary.logo} className={`cursor-pointer`} onClick={() => router.push("/")} />}
      <div className="hidden sm:block">
        {slice?.primary && <PrismicNextImage field={slice.primary.search} />}
      </div>
      <div className="flex gap-4 font-ubuntu cursor-pointer" tabIndex={0} onClick={() => setShowSidebar(true)} aria-label="Button">
        <div className="hidden sm:block">
          {slice?.primary?.header_menu_toggle_title && slice.primary.header_menu_toggle_title}
        </div>
        {slice?.primary?.header_menu_toggle_icon && <PrismicNextImage
          field={slice.primary.header_menu_toggle_icon}
        />}
      </div>
    </section>
  );
};

export default Navbar;
