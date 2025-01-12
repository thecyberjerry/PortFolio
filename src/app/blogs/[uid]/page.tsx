import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { BlogsliceProps } from "@/slices/Blogslice"
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
type Customblogslice =
    {
        slice: Pick<BlogsliceProps, "slice">
        params: Promise<{ uid: string }>
    }
export default async function Page({ params }: Customblogslice) {
    const slug = (await params).uid;
    const client = createClient();
    const page = await client.getByUID("blogpost", slug).catch(() => notFound());
    return <Suspense fallback={<Loading />}>
        <SliceZone slices={page.data.slices} components={components} />
    </Suspense>
}