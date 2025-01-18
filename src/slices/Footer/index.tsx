"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import Customform from "@/app/components/Form";
/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`mt-20 md:mt-32  items-center flex flex-col gap-10 ${slice.primary.font_family} ${slice.primary.font_colour}`}
    >
      <PrismicRichText field={slice.primary.title} />
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className={`justify-around flex flex-col gap-6 md:gap-0 ${slice.primary.font_weight}`}>
          <div className="">
            <PrismicRichText field={slice.primary.description} />
          </div>
          <div className="space-y-4">
            {slice.primary.location_information.map((item: any, index: number) => (
              <div key={index}>
                <PrismicRichText field={item.location} />
              </div>
            ))}
          </div>
        </div>
        <Customform slice={slice} />
        {/* <Customform /> */}
      </div>
    </section>
  );
};

export default Footer;
