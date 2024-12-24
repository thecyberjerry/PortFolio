"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { JSX } from "react";
import Work from "@/app/components/Work";
/**
 * Props for `MyWork`.
 */
export type MyWorkProps = SliceComponentProps<Content.MyWorkSlice>;

/**
 * Component for "MyWork" Slices.
 */
const MyWork = ({ slice, index, slices, context }: MyWorkProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.card_font} mt-32 flex flex-col gap-10`}
    >
      {slice && <Work slice={slice}/>}
    </section>
  );
};

export default MyWork;
