import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { TracingBeam } from "@/components/ui/tracing-beam";
/**
 * Props for `Blogslice`.
 */
export type BlogsliceProps = SliceComponentProps<Content.BlogsliceSlice>;
export type Spotlight = Pick<BlogsliceProps, "slice">

/**
 * Component for "Blogslice" Slices.
 */
export default function Blogslice({ slice }: BlogsliceProps): JSX.Element {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.font_family} ${slice.primary.text_colour} space-y-2`}
    >
      <SpotlightPreview slice={slice} />
      <TracingBeamDemo slice={slice} />
    </section>
  );
};


export function SpotlightPreview({ slice }: Spotlight): JSX.Element {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-10 md:pt-0">
        <section className="font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <PrismicRichText field={slice.primary.main_blog_title} />
        </section>
        <section className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          <PrismicRichText field={slice.primary.blog_title} />
        </section>
      </div>
    </div>

  );
}

export function TracingBeamDemo({ slice }: Spotlight): JSX.Element {
  return (
    <TracingBeam className="px-8 md:px-6">
      <div className="w-full mx-auto antialiased pt-4 relative">
        {slice.primary.blog_text.map((item, index: number) => (
          <React.Fragment key={index}>
            <div key={index}>
              <div className="mb-10">
                <div className="prose prose-sm dark:prose-invert">
                  <PrismicNextImage field={slice.primary.blog_image} />
                </div>
              </div>
              <PrismicRichText field={item.text} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </TracingBeam>
  );
}

