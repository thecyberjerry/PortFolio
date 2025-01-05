import React from 'react'
import { createClient } from "@/prismicio";
import Blogcard from '../components/Blogcard';
export default async function Page() {
    const client = createClient();
    const documents = await client.getAllByType("blogpost", {
        limit: 3, orderings: [{
            field: "my.blogpost.date",
            direction: "desc",
        },]
    });
    return <React.Fragment>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20'>
            {documents.map((item: any, index: number) => {
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
