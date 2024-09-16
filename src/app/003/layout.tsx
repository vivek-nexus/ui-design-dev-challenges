import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import 'animate.css';

export const metadata: Metadata = {
    title: "#3 UI Design + Dev Challenges",
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
            <main className={`${inter.className}`}>
                {children}
            </main>
        </>
    )
}
