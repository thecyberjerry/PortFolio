import { FooterProps } from "@/slices/Footer";
import { PrismicRichText } from "@prismicio/react";
import { JSX } from "react";

export type Customfooter = Pick<FooterProps, "slice">
export default function Footer({ slice }: Customfooter): JSX.Element {
    return (
        <div>
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.description} />
            {slice.primary.location_information.map((item: any, index: number) => (
                <div key={index}>
                    <PrismicRichText field={item.location} />
                </div>
            ))}
        </div>
    )
}
