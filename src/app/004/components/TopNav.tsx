"use client"

import { usePathname } from "next/navigation"
import { SetStateAction, useEffect, useState } from "react"

type TabItem = "home" | "shop" | "f-cut" | "about" | ""

export default function TopNav() {
    const [activeItem, setActiveItem] = useState<SetStateAction<TabItem>>("")
    const pathName = usePathname()

    useEffect(() => {
        if (pathName.includes("shop")) {
            setActiveItem("shop")
        }
        else if (pathName.includes("about")) {
            setActiveItem("about")
        }
        else {
            setActiveItem("home")
        }
    }, [pathName])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 font-semibold ${activeItem === "home" ? `bg-transparent mt-6` : `bg-black`}`}>
            <div className="max-w-[1024px] mx-auto p-4">
                {activeItem === "home" &&
                    <div className="px-6 flex gap-4 justify-between">
                        <img src={`${process.env.NEXT_PUBLIC_LINK_PREFIX}/004/logo.png`} alt="freitag logo" />
                        <HamburgerMenuIconBlack />
                    </div>
                }
                {activeItem === "about" &&
                    <div className="flex gap-4 justify-between text-white">
                        <div className="cursor-pointer"><LeftChevronIcon /></div>
                        <span>ABOUT</span>
                        <div className="flex gap-4">
                            <HamburgerMenuIcon />
                            <SearchIcon />
                        </div>
                    </div>
                }
                {activeItem === "shop" &&
                    <div className="flex gap-4 justify-between text-white">
                        <div className="cursor-pointer"><LeftChevronIcon /></div>
                        <span>{pathName.includes("/bags/bag") ? `LIMITED` : `CATEGORY`}</span>
                        <div className="flex gap-4">
                            <HamburgerMenuIcon />
                            <SearchIcon />
                        </div>
                    </div>
                }
            </div>
        </nav>
    )
}

function LeftChevronIcon() {
    return (
        <div onClick={() => window.history.back()}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                <mask id="mask0_91_395" styles="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_91_395)">
                    <path d="M10 22L0 12L10 2L11.775 3.775L3.55 12L11.775 20.225L10 22Z" fill="white" />
                </g>
            </svg>
        </div>
    )
}

function HamburgerMenuIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
            <mask id="mask0_91_390" styles="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_91_390)">
                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white" />
            </g>
        </svg>
    )
}

function HamburgerMenuIconBlack() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
            <mask id="mask0_91_375" styles="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_91_375)">
                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="black" />
            </g>
        </svg>
    )
}

function SearchIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
            <mask id="mask0_91_387" styles="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_91_387)">
                <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="white" />
            </g>
        </svg>
    )
}
