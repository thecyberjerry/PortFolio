import Testimonalslider from "@/app/components/Testimonialslider";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { JSX } from "react";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.testimonial_fonts} ${slice.primary.testimonial_font_colour} mt-20 md:mt-32  flex flex-col gap-24`}
    >
      <div className="mx-auto"><PrismicRichText field={slice.primary.title} /></div>
      <Testimonalslider>
        <React.Fragment>
          {slice.primary.testimonial_card.map((item, index: number) => (
            // Render the item
            <div className={`flex gap-10 md:flex-row flex-col ${item.reverse && "md:flex-row-reverse"} d-flex`} key={index}>
              <div className="w-[100%] mx-auto md:w-[40%]"><PrismicNextImage field={item.image} /></div>
              <div className="w-full md:w-1/2 m-auto">
                <div className="w-[10%] md:w-10"><PrismicNextImage field={slice.primary.testimonial_quote} /></div>
                <PrismicRichText field={item.testimonial_description} />
                <div className="flex [&>*]:rotate-180 md:w-full [&>*]:w-10 justify-end"><PrismicNextImage field={slice.primary.testimonial_quote} /></div>
                <div>
                  <PrismicRichText field={item.name} />
                  <PrismicRichText field={item.desgination} />
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      </Testimonalslider>
    </section>
  );
};

export default Testimonials;
