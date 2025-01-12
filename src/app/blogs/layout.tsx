
export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section suppressHydrationWarning className="mt-20">{children}</section>
}
