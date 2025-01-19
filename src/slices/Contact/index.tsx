"use client"
import Button from "@/app/components/Button";
import { Scrolltobottom } from "@/app/utils/scrolltobottom";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { JSX } from "react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`mt-20 md:mt-32 py-20 items-center flex flex-col gap-10 ${slice.primary.contact_section_font} ${slice.primary.background_colour} ${slice.primary.contact_us_font_colour}`}
    >
      <div className="flex flex-col gap-4 text-center">
        <h5>{slice.primary.title}</h5>
        <PrismicRichText field={slice.primary.sub_title} />
      </div>
      <Button onClick={Scrolltobottom} btnBg={slice.primary.button_background_colour} btnTextColour={slice.primary.button_text_colour} btnTextFont={slice.primary.button_text_font} >
        <PrismicRichText field={slice.primary.button_text} />
      </Button>
      <div className="flex gap-10">
        {slice.primary.socials.map((item: any, index: number) => (
          <Link key={index} href={item?.social_link?.url || "#"}>
            <PrismicNextImage field={item.social_icon} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
