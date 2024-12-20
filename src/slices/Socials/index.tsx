import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import React, { JSX } from "react";
import { LinkField } from '@prismicio/types'; // Import Prismic Link types (if using)
/**
 * Props for `Socials`.
 */
export type SocialsProps = SliceComponentProps<Content.SocialsSlice>;

/**
 * Component for "Socials" Slices.
 */
const Socials = ({ slice }: SocialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex mt-6 gap-4 justify-center md:justify-start"
    >
      {slice.primary.social_link && slice.primary.social_link.map((item: any, index: number) => (
        <Link key={index} href={item.social_link.url}><PrismicNextImage field={item.social_image} /></Link>
      ))}
    </section>
  );
};

export default Socials;
