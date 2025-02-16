"use client";
import React, { useEffect, useState } from 'react'
import { createClient } from "@/prismicio";
import Blogcard from '../components/Blogcard';
import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
import { asText } from '@prismicio/helpers';
const client = createClient();

export default function Page() {
    const [documents, setDocuments] = useState<any>(null);
    const [header, setHeader] = useState<any>(null);
    function HeroHighlightDemo() {
        return (
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className={`${header.results[0].data.slices[0]?.primary.hero_section_text_font} text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto `}>
                    {header.results[0]?.data?.slices[0]?.variation === "blogpageheader" && (<>
                        {asText(header.results[0]?.data?.slices[0]?.primary?.initial_text)}
                        {" "}
                        <Highlight className="text-black dark:text-white">
                            {asText(header.results[0]?.data?.slices[0]?.primary?.highlighted_text)}
                        </Highlight>
                        {" "}
                        {asText(header.results[0]?.data?.slices[0]?.primary?.blog_quote)}
                    </>)}

                </motion.h1>
            </HeroHighlight>
        );
    }

    useEffect(() => {
        async function Fetchdata() {
            const documents = await client.getAllByType("blogpost", {
                limit: 3, orderings: [{
                    field: "my.blogpost.date",
                    direction: "desc",
                },]
            });
            const header = await client.getByType("blogpageheader");
            setDocuments(documents);
            setHeader(header);
        }
        Fetchdata();
    }, [])
    return <React.Fragment>
        {header && <HeroHighlightDemo />}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {documents && documents.map((item: any, index: number) => {
                let { data: { slices }, url } = item;
                return <Blogcard
                    key={index}
                    bgcolor={'bg-primary'}
                    fontfamily={slices[0]?.primary.font_family}
                    textcolor={slices[0]?.primary.text_colour}
                    children={slices}
                    url={url}
                />
            })}
        </div>
    </React.Fragment>
}
