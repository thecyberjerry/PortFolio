"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ParallexProps } from "@/slices/Parallex";
import { asImageSrc, asLink, asText } from "@prismicio/helpers";

export function HeroParallaxcomponent({ slice }: Pick<ParallexProps, "slice">) {
    const products = slice.primary.parallex_content.map((item) => {
        return {
            title: asText(item?.title) || "",
            link: asLink(item?.link) || "",
            thumbnail: asImageSrc(item?.image) || "",
        }
    })
    return <HeroParallax
        products={products}
        title={asText(slice.primary.heading_text)}
        description={asText(slice.primary.description_text)} />;
}