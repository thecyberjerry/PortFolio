import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Blogslice`.
 */
export type BlogsliceProps = SliceComponentProps<Content.BlogsliceSlice>;

/**
 * Component for "Blogslice" Slices.
 */
const Blogslice = ({ slice }: BlogsliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.font_family} ${slice.primary.text_colour}`}
    >
      <PrismicRichText field={slice.primary.blog_title} />
      {slice.primary.blog_text.map((item, index: number) => (
        // Render the item
        <div key={index}>
          <PrismicRichText field={item.text} />
          {/* <PrismicNextImage field={item.blog_image} /> */}
        </div>
      ))}
    </section>
  );
};

export default Blogslice;
