import { Content } from "@prismicio/client";
import { asImageSrc, asLink, asText } from "@prismicio/helpers";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import { Card, FocusCards } from "@/components/ui/focus-cards";
/**
 * Props for `Portofolio`.
 */
export type PortofolioProps = SliceComponentProps<Content.PortofolioSlice>;

/**
 * Component for "Portofolio" Slices.
 */

function FocusCardsDemo({ card }: { card: Card[] }) {
  return <FocusCards cards={card} />;
}

const Portofolio = ({ slice }: PortofolioProps): JSX.Element => {
  const data = slice.primary.image_gallery.map((item) => ({ src: asImageSrc(item.image) || "", title: asText(item.title) || "", url: asLink(item.link) || "", fontfamily: slice.primary.font_family || "font-rubik" }));
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.font_family} mt-20 md:mt-32  items-center flex flex-col gap-10`}
    >
      <div className={`${slice.primary.font_colour}`}><PrismicRichText field={slice.primary.title} /></div>
      <FocusCardsDemo card={data} />
    </section>
  );
};

export default Portofolio;
