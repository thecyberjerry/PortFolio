import Button from "@/app/components/Button";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import Form from 'next/form'
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
        <Form action={"#"} className={`${slice.primary.form_background_colour} ${slice.primary.form_font_colour} py-8 px-4 md:p-20`}>
          <div>
            <input type="text" id="name" className="bg-transparent border-b-2 w-full mb-10 placeholder:text-secondary focus:outline-none" placeholder="Your Name" required />
          </div>
          <div>
            <input type="email" id="email" className="bg-transparent border-b-2 w-full mb-10 placeholder:text-secondary focus:outline-none" placeholder="Your Email" required />
          </div>
          <div>
            <input type="text" id="budget" className="bg-transparent border-b-2 w-full mb-10 placeholder:text-secondary focus:outline-none" placeholder="Your Budget (Optional)" required />
          </div>
          <div>
            <textarea id="message" rows={6} className="resize-none bg-transparent border-b-2 w-full mb-10 placeholder:text-secondary focus:outline-none" placeholder="Your Email" required />
          </div>
          {
            slice.primary.button_text &&
            <Button btnBg={slice.primary.button_background_colour} btnTextFont={slice.primary.button_font_family} btnTextColour={slice.primary.button_font_colour}>
              <PrismicRichText field={slice.primary.button_text} />
            </Button>
          }
        </Form>
      </div>
    </section>
  );
};

export default Footer;
