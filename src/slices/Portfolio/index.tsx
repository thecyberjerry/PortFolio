import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Portofolio`.
 */
export type PortofolioProps = SliceComponentProps<Content.PortofolioSlice>;

/**
 * Component for "Portofolio" Slices.
 */
const Portofolio = ({ slice }: PortofolioProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.font_family} mt-20 md:mt-32  items-center flex flex-col gap-10`}
    >
      <div className={`${slice.primary.font_colour}`}><PrismicRichText field={slice.primary.title} /></div>
      <div className="columns-2 md:columns-3 gap-4 space-y-3 w-full">
        {slice.primary.image_gallery.map((item, index: number) => (
          <div className="relative group overflow-hidden" key={index}>
            <PrismicNextImage
              field={item.image}
              className="md:w-full rounded-lg group-hover:brightness-75 transition duration-300 "
            />
            <span className="absolute -bottom-6 -right-6 text-white transition-all duration-300 group-hover:bottom-5 group-hover:right-5  md:group-hover:bottom-5 md:group-hover:right-12">
              <PrismicRichText field={item.title} />
            </span>
          </div>

        ))}
      </div>
    </section>
  );
};

export default Portofolio;
