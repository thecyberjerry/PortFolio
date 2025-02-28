import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Read Blogs", 
    description: "Surf through my blogs",
  };
  
export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section suppressHydrationWarning className="mt-20">{children}</section>
}
