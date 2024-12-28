import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Statistics`.
 */
export type StatisticsProps = SliceComponentProps<Content.StatisticsSlice>;

/**
 * Component for "Statistics" Slices.
 */
const Statistics = ({ slice }: StatisticsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-20 md:mt-32  items-center flex flex-col gap-10"
    >
      <div className="flex flex-col items-center gap-10 text-center md:gap-0 md:flex-row md:justify-evenly w-full">
        {slice.primary.stats.map((item, index: number) => (
          // Render the item
          <div key={index} className={`${slice.primary.statistics_font_colour} ${slice.primary.statistics_font_family}`}>
            <PrismicRichText field={item.numbers} />
            <PrismicRichText field={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
