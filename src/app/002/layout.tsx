import type { Metadata } from "next"
import { Figtree } from 'next/font/google'

export const metadata: Metadata = {
    title: "#2 UI Design + Dev Challenges",
    description: "Practicing my UI design and development skills",
}

const figtree = Figtree({
    subsets: ['latin'],
    display: 'swap',
})

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main className={`${figtree.className}`}>
                {children}
            </main>
        </>
    )
}
