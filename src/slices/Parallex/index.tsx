import { HeroParallaxcomponent } from "@/app/components/Parallex";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { JSX } from "react";

/**
 * Props for `Parallex`.
 */
export type ParallexProps = SliceComponentProps<Content.ParallexSlice>;

/**
 * Component for "Parallex" Slices.
 */
const Parallex = ({ slice }: ParallexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.font_family} mt-20 md:mt-32 gap-10`}
    >
      <div className="mx-auto"><PrismicRichText field={slice.primary.section_title} />
      </div>
      {/* <PrismicRichText field={slice.primary.heading_text} />
      <PrismicRichText field={slice.primary.description_text} /> */}

      <HeroParallaxcomponent slice={slice} />
    </section>
  );
};

export default Parallex;
