import Image from 'next/image'
import React, { JSX } from 'react'

export type Blogcard = {
    fontfamily: string,
    bgcolor: string,
    textcolor: string
}
export default function Blogcard({ fontfamily, bgcolor, textcolor }: Blogcard): JSX.Element {
    return (
        <div className={`grid grid-cols-3 gap-6 ${textcolor} ${fontfamily}`}>
            <div>
                <div className="image w-full [&>*]:w-full">
                    <Image alt='some alt' width={100} height={100} src={"https://dummyimage.com/720x400"} />
                </div>
                <div className={`lower bg-primary text-secondary p-4 flex flex-col gap-10 ${bgcolor}`}>
                    <div className='flex justify-between'>
                        <p>25 Commnets</p>
                        <p>17 Likes</p>
                        <p>By John</p>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, accusantium?...</div>
                    <div>Read More</div>
                </div>
            </div>
            <div>
                <div className="image w-full [&>*]:w-full">
                    <Image alt='some alt' width={100} height={100} src={"https://dummyimage.com/720x400"} />
                </div>
                <div className={`lower bg-primary text-secondary p-4 flex flex-col gap-10 ${bgcolor}`}>
                    <div className='flex justify-between'>
                        <p>25 Commnets</p>
                        <p>17 Likes</p>
                        <p>By John</p>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, accusantium?...</div>
                    <div>Read More</div>
                </div>
            </div>
            <div>
                <div className="image w-full [&>*]:w-full">
                    <Image alt='some alt' width={100} height={100} src={"https://dummyimage.com/720x400"} />
                </div>
                <div className={`lower bg-primary text-secondary p-4 flex flex-col gap-10 ${bgcolor}`}>
                    <div className='flex justify-between'>
                        <p>25 Commnets</p>
                        <p>17 Likes</p>
                        <p>By John</p>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, accusantium?...</div>
                    <div>Read More</div>
                </div>
            </div>
        </div>
    )
}
