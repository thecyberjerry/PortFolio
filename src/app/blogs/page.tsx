import React, { Suspense } from 'react'
import { createClient } from "@/prismicio";
import Blogcard from '../components/Blogcard';
import { Highlight, HeroHighlight } from "@/components/ui/hero-highlight";
import { asText } from '@prismicio/helpers';
import Loading from './[uid]/loading';
import Motionheadingone from '../components/Motionheadingone';
const client = createClient();

export default async function Page() {
    const documents = await client.getAllByType("blogpost", {
        limit: 6, orderings: [{
            field: "my.blogpost.date",
            direction: "desc",
        },]
    });
    const header = await client.getByType("blogpageheader");
    function HeroHighlightDemo() {
        return (
            <HeroHighlight>
                <Motionheadingone
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

                </Motionheadingone>
            </HeroHighlight>
        );
    }
    return <Suspense fallback={<Loading />}>
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
    </Suspense>
}
