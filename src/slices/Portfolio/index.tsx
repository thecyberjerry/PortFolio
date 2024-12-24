import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Portofolio`.
 */
export type PortofolioProps = SliceComponentProps<Content.PortofolioSlice>;

/**
 * Component for "Portofolio" Slices.
 */
const Portofolio = ({ slice }: PortofolioProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for portofolio (variation: {slice.variation}) Slices
    </section>
  );
};

export default Portofolio;
