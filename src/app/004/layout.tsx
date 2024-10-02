import type { Metadata } from "next"
import { Roboto_Flex } from 'next/font/google'
import 'animate.css';
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";

export const metadata: Metadata = {
    title: "#4 UI Design + Dev Challenges",
    description: "Practicing my UI design and development skills",
}

const robotoFlex = Roboto_Flex({
    subsets: ['latin'],
    display: 'swap',
})

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-black">
            <TopNav />
            <main className={`${robotoFlex.className} text-white min-h-dvh max-w-[1024px] mx-auto p-4 pb-32 lg:pb-4`}>
                {children}
                <BottomNav />
            </main>
        </div>
    )
}
