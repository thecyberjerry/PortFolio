"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/helpers";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
const client = createClient();

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const [mounted, setMounted] = useState(false);
    const [documents, setDocuments] = useState<any>(null);
    useEffect(() => {
        async function Fetchdata() {
            const documents = await client.getAllByType("blogpost", {
                fetchOptions: { cache: "force-cache" },
                limit: 5, orderings: [{
                    field: "my.blogpost.date",
                    direction: "desc",
                },]
            });
            setDocuments(documents);
        }
        Fetchdata();
    }, []);
    function AnimatedTestimonialsDemo() {
        const allSlice = documents && documents.map(({ url, data: { slices } }: any) => {
            let slice = slices[0]
            let obj =
            {
                quote: asText(slice?.primary.blog_title) || "",
                name: "Himanshu",
                designation: "Web Developer | Cybersecurity Enthusiast",
                src: slice?.primary?.blog_image?.url || "",
                redirectUrl: url!
            }
            return obj
        })

        return React.createElement("div", { className: "mt-20 md:mt-32" }, <React.Fragment>
            {React.createElement("h2", { className: "font-ubuntu" }, "Explore my other blogs")}
            <AnimatedTestimonials testimonials={allSlice} />
        </React.Fragment>);
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="px-4 md:px-32">
            {children}
            <Suspense fallback={<Loading />}>{mounted && <AnimatedTestimonialsDemo />}</Suspense>
        </section>
    );
}
