"use client"
import { PrismicNextImage } from '@prismicio/next'
import { asText } from '@prismicio/helpers'
import React, { JSX } from 'react'
import Link from 'next/link'

export type CustomBlogcard = {
    fontfamily?: string,
    bgcolor?: string,
    textcolor?: string,
    url?: string,
    children?: any
}
export default function Blogcard({ fontfamily, bgcolor, textcolor, children, url }: CustomBlogcard): JSX.Element {
    return (
        <React.Fragment>
            {children && children.map((item: any, index: number) => {
                return (<div key={index} className={`${textcolor} ${fontfamily}`}>
                    <div className="aspect-3/2 [&>img]:object-cover [&>img]:object-top [&>img]:w-full [&>img]:h-full">
                        <PrismicNextImage
                            field={item.primary.blog_image}
                        />
                    </div>
                    <div className={`lower bg-primary text-secondary p-4 flex flex-col gap-3 md:gap-10 ${bgcolor}`}>
                        <div className='flex justify-between'>
                            <p>25 Commnets</p>
                            <p>17 Likes</p>
                            <p>By John</p>
                        </div>
                        <div>
                            {asText(item.primary.blog_title)?.slice(0, 140)}...
                        </div>
                        <div><Link href={url!}>Read More</Link></div>
                    </div>
                </div>)
            })}
        </React.Fragment >
    )
}
