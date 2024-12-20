import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";
/**
 * Props for `Navbar`.
 */
export type NavbarProps = SliceComponentProps<Content.NavbarSlice>;

/**
 * Component for "Navbar" Slices.
 */
const Navbar = ({ slice }: NavbarProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-between items-center"
    >
      {slice?.primary && <PrismicNextImage field={slice.primary.logo} />}
      <div className="hidden sm:block">
        {slice?.primary && <PrismicNextImage field={slice.primary.search} />}
      </div>
      <div className="flex gap-4 font-ubuntu">
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
