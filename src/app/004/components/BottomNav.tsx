"use client"

import { usePathname, useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type TabItem = "home" | "shop" | "f-cut" | "about" | ""

export default function BottomNav() {
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
        <nav className={`${pathName.includes("bags/bag") ? `hidden md:grid` : ``} p-4 grid grid-cols-4 lg:flex lg:flex-col justify-center lg:gap-8 fixed bottom-0 left-0 right-0 z-40 lg:left-4 lg:right-auto lg:top-0 lg:bottom-0 bg-black/50 text-white backdrop-blur-lg`}>
            <TabItem item="home" isActive={activeItem === "home"} setActiveItem={setActiveItem} />
            <TabItem item="shop" isActive={activeItem === "shop"} setActiveItem={setActiveItem} />
            <TabItem item="f-cut" isActive={activeItem === "f-cut"} setActiveItem={setActiveItem} />
            <TabItem item="about" isActive={activeItem === "about"} setActiveItem={setActiveItem} />
        </nav>
    )
}

function TabItem(
    { item, isActive, setActiveItem }:
        {
            item: TabItem, isActive: boolean, setActiveItem: Dispatch<SetStateAction<SetStateAction<TabItem>>>

        }) {
    const router = useRouter()

    return (
        <div
            className={`${isActive ? `` : `opacity-50`} transition-all ease-in-out duration-300 delay-100 cursor-pointer flex flex-col justify-center items-center`}
            onClick={() => {
                if (item === "home") {
                    setActiveItem(item)
                    router.push("/004")
                }
                if (item === "shop") {
                    setActiveItem(item)
                    router.push("/004/shop")
                }
                if (item === "about") {
                    setActiveItem(item)
                    router.push("/004/about")
                }
            }}
        >
            <div className="mb-2">
                <GetIcon iconName={item} />
            </div>
            <span>{item.toUpperCase()}</span>
        </div>
    )
}

function GetIcon({ iconName }: { iconName: TabItem }) {
    switch (iconName) {
        case "home":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4509 1.60064C11.7688 1.33548 12.2309 1.33548 12.5488 1.60064L23.5442 10.7703C24.1598 11.2836 23.7968 12.2857 22.9953 12.2857H1.00445C0.202921 12.2857 -0.160082 11.2836 0.455482 10.7703L11.4509 1.60064Z" fill="white" />
                    <rect x="4.57129" y="8" width="14.8571" height="16" rx="0.857143" fill="white" />
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <path d="M11.4509 1.60064C11.7688 1.33548 12.2309 1.33548 12.5488 1.60064L23.5442 10.7703C24.1598 11.2836 23.7968 12.2857 22.9953 12.2857H1.00445C0.202921 12.2857 -0.160082 11.2836 0.455482 10.7703L11.4509 1.60064Z" fill="#F4DB73" />
                    </g>
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <rect x="4.57129" y="8" width="14.8571" height="16" rx="0.857143" fill="#EB6D54" />
                    </g>
                </svg>

            )
        case "shop":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="6" r="3.375" stroke="#F4DB73" stroke-width="2.25" />
                    <path d="M4.50344 6.78258C4.54211 6.33978 4.91285 6 5.35734 6H18.6433C19.0878 6 19.4586 6.3398 19.4972 6.78261L20.9187 23.0683C20.9624 23.5692 20.5676 24 20.0648 24H3.93525C3.43244 24 3.03762 23.5692 3.08136 23.0683L4.50344 6.78258Z" fill="white" />
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <path d="M4.50344 6.78258C4.54211 6.33978 4.91285 6 5.35734 6H18.6433C19.0878 6 19.4586 6.3398 19.4972 6.78261L20.9187 23.0683C20.9624 23.5692 20.5676 24 20.0648 24H3.93525C3.43244 24 3.03762 23.5692 3.08136 23.0683L4.50344 6.78258Z" fill="#EB6D54" />
                    </g>
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <circle cx="8.25" cy="9.75" r="0.75" fill="#EB6D54" />
                    </g>
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <circle cx="15.75" cy="9.75" r="0.75" fill="#EB6D54" />
                    </g>
                </svg>
            )
        case "f-cut":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="4.5" width="14.8571" height="16" rx="1.5" fill="white" />
                    <rect x="4.57129" y="8" width="14.8571" height="16" rx="1.5" fill="white" />
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <rect x="4.57129" y="8" width="14.8571" height="16" rx="1.5" fill="#F4DB73" />
                    </g>
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <rect y="4.5" width="14.8571" height="16" rx="1.5" fill="#EB6D54" />
                    </g>
                    <path d="M8.25 9L8.25 15" stroke="#2C2C2C" stroke-width="1.875" stroke-linecap="round" />
                    <path d="M5.25 12L11.25 12" stroke="#2C2C2C" stroke-width="1.875" stroke-linecap="round" />
                </svg>
            )
        case "about":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7426 14.7426C21.2998 14.1855 21.7417 13.5241 22.0433 12.7961C22.3448 12.0681 22.5 11.2879 22.5 10.5C22.5 9.71207 22.3448 8.93185 22.0433 8.2039C21.7417 7.47595 21.2998 6.81451 20.7426 6.25736C20.1855 5.70021 19.5241 5.25825 18.7961 4.95672C18.0681 4.65519 17.2879 4.5 16.5 4.5C15.7121 4.5 14.9319 4.65519 14.2039 4.95672C13.4759 5.25825 12.8145 5.70021 12.2574 6.25736L16.5 10.5L20.7426 14.7426Z" fill="white" />
                    <rect x="3.51465" y="15" width="12.3763" height="12" transform="rotate(-45 3.51465 15)" fill="white" />
                    <path d="M11.7426 6.25736C11.1855 5.70021 10.5241 5.25825 9.7961 4.95672C9.06815 4.65519 8.28793 4.5 7.5 4.5C6.71207 4.5 5.93185 4.65519 5.2039 4.95672C4.47594 5.25825 3.81451 5.70021 3.25736 6.25736C2.70021 6.81451 2.25825 7.47595 1.95672 8.2039C1.65519 8.93185 1.5 9.71207 1.5 10.5C1.5 11.2879 1.65519 12.0681 1.95672 12.7961C2.25825 13.5241 2.70021 14.1855 3.25736 14.7426L7.5 10.5L11.7426 6.25736Z" fill="white" />
                    <rect x="3.24756" y="14.7323" width="12" height="12.3786" transform="rotate(-45 3.24756 14.7323)" fill="white" />
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <path d="M20.7426 14.7426C21.2998 14.1855 21.7417 13.5241 22.0433 12.7961C22.3448 12.0681 22.5 11.2879 22.5 10.5C22.5 9.71207 22.3448 8.93185 22.0433 8.2039C21.7417 7.47595 21.2998 6.81451 20.7426 6.25736C20.1855 5.70021 19.5241 5.25825 18.7961 4.95672C18.0681 4.65519 17.2879 4.5 16.5 4.5C15.7121 4.5 14.9319 4.65519 14.2039 4.95672C13.4759 5.25825 12.8145 5.70021 12.2574 6.25736L16.5 10.5L20.7426 14.7426Z" fill="#F4DB73" />
                    </g>
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <rect x="3.51465" y="15" width="12.3763" height="12" transform="rotate(-45 3.51465 15)" fill="#F4DB73" />
                    </g>
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <path d="M11.7426 6.25736C11.1855 5.70021 10.5241 5.25825 9.7961 4.95672C9.06815 4.65519 8.28793 4.5 7.5 4.5C6.71207 4.5 5.93185 4.65519 5.2039 4.95672C4.47594 5.25825 3.81451 5.70021 3.25736 6.25736C2.70021 6.81451 2.25825 7.47595 1.95672 8.2039C1.65519 8.93185 1.5 9.71207 1.5 10.5C1.5 11.2879 1.65519 12.0681 1.95672 12.7961C2.25825 13.5241 2.70021 14.1855 3.25736 14.7426L7.5 10.5L11.7426 6.25736Z" fill="#EB6D54" />
                    </g>
                    {/* @ts-expect-error: This is a SVG from Figma which I don't want to touch */}
                    <g styles="mix-blend-mode:plus-darker">
                        <rect x="3.25391" y="14.739" width="12" height="12.3693" transform="rotate(-45 3.25391 14.739)" fill="#EB6D54" />
                    </g>
                </svg>
            )
        default:
            break;
    }
}