import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import Loading from "./loading";
import AnimatedTestimonials from "@/app/components/Animatedcarousel";
import { asText } from "@prismicio/helpers";
type Customblogslice =
    {
        params: Promise<{ uid: string }>
    }
export const revalidate = 60;
export default async function Page({ params }: Customblogslice) {
    const slug = (await params).uid;
    const client = createClient();
    const [page, animatedBlogs] = await Promise.all([
        client.getByUID("blogpost", slug).catch(() => notFound()),
        client.getAllByType("blogpost", {
            fetchOptions: { cache: "force-cache" },
            limit: 5, orderings: [{
                field: "my.blogpost.date",
                direction: "desc",
            },]
        })
    ]);
    function AnimatedTestimonialsCustom() {
        const allSlice = animatedBlogs && animatedBlogs.map(({ url, data: { slices } }: any) => {
            let slice = slices[0]
            let obj =
            {
                quote: asText(slice?.primary.blog_title) || "",
                name: "Himanshu",
                designation: "Cybersecurity Enthusiast | Web Developer",
                src: slice?.primary?.blog_image?.url || "",
                redirectUrl: url!
            }
            return obj
        })
        return React.createElement("div", { className: "mt-20 md:mt-32" }, <React.Fragment>
            {React.createElement("h1", { className: "font-ubuntu" }, "Explore my other blogs")}
            {allSlice && <AnimatedTestimonials testimonials={allSlice} />}
        </React.Fragment>);
    }
    return <React.Fragment>
        <Suspense fallback={<Loading />}>
            <SliceZone slices={page.data.slices} components={components} />
        </Suspense>
        <Suspense fallback={<Loading />}>{animatedBlogs && <AnimatedTestimonialsCustom />}</Suspense>
    </React.Fragment>
}