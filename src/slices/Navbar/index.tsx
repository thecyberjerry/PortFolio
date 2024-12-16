import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

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
      className="container">
      <div className="border-4 flex px-10 border-red-500">
        <PrismicNextImage field={slice.primary.logo} />
        <PrismicNextImage field={slice.primary.search} />
        {slice.primary.header_menu_toggle_title}
        <PrismicNextImage
          field={slice.primary.header_menu_toggle_icon}
        />
      </div>
    </section>
  );
};

export default Navbar;
