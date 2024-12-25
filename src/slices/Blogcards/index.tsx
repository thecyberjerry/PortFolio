import Blogcard from "@/app/components/Blogcard";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Blogcards`.
 */
export type BlogcardsProps = SliceComponentProps<Content.BlogcardsSlice>;

/**
 * Component for "Blogcards" Slices.
 */
const Blogcards = ({ slice }: BlogcardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.font_family} mt-32 items-center flex flex-col gap-10`}
    >
      <PrismicRichText field={slice.primary.title} />
      <Blogcard bgcolor={slice.primary.blog_card_background_colour} fontfamily={slice.primary.font_family} textcolor={slice.primary.font_colour} />
    </section>
  );
};

export default Blogcards;
