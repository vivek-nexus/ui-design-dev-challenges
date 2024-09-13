import type { Metadata } from "next"
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
    title: "#1 UI Design + Dev Challenges",
    description: "Practicing my UI design and development skills",
}

const inter = Inter({
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
            <main className={`${inter.className} bg-black text-white`}>
                {children}
            </main>
        </>
    )
}
