import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";
import React from "react";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-between mt-10 md:mt-20 flex-col md:flex-row gap-2 md:gap-0"
    >
      <aside className="flex gap-4 flex-col w-full text-primary justify-center">
        {slice.primary.greeting_text_font && <div className={slice.primary.greeting_text_font}>
          <PrismicRichText field={slice.primary.greeting_text_hero_section} />
        </div>}
        <div className={`flex flex-col gap-4 ${slice.primary.hero_section_text_font}`}>
          <div className="flex gap-2 md:gap-3">
            <PrismicRichText field={slice.primary.introduction_text} /><span className={slice.primary.name_font_weight}><PrismicRichText field={slice.primary.name} /></span>
          </div>
          <PrismicRichText
            field={slice.primary.hero_section_secondary_text}
          />
          <PrismicRichText
            field={slice.primary.hero_section_secondary_sub_text}
          />
        </div>
      </aside>
      <aside className="w-full flex justify-center md:justify-end"><PrismicNextImage field={slice.primary.hero_image} /></aside>
    </section>
  );
};

export default Hero;
