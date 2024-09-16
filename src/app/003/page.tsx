"use client"

import { useState } from 'react'
import { fontData } from './fontData'
import NavBar from "./components/NavBar"
import FontCard from "./components/FontCard"
import StyleTab from "./components/StyleTab"
import LicenseTab from "./components/LicenseTab"
import DetailsTab from "./components/DetailsTab"
import GlyphsTab from "./components/GlyphsTab"
import { Icon } from "./components/Icon"

export default function Home() {
    const [isLightMode, setIsLightMode] = useState(true)
    const [pageStateForMobile, setPageStateForMobile] = useState<"main" | "sub">("main")
    const [fontInView, setFontInView] = useState("Plus Jakarta Sans")
    const [tab, setTab] = useState<"Style" | "Glyphs" | "Details" | "License">("Style")
    const [fontNameSearchString, setFontNameSearchString] = useState("")
    const [userText, setUserText] = useState("")

    return (
        <>
            <div
                className={`h-screen flex flex-col ${isLightMode ? `text-black bg-white` : `text-white bg-black`}
                transition-all ease-in-out duration-300 delay-100
            `}
            >
                <NavBar
                    isLightMode={isLightMode}
                    setIsLightMode={setIsLightMode}
                    state={pageStateForMobile}
                    setNavState={setPageStateForMobile}
                />
                <div className="w-full mx-auto px-6 flex-1 overflow-y-auto flex flex-col">
                    <div className="grid grid-cols-12 overflow-y-auto">
                        <div className={`col-span-12 ${pageStateForMobile === "main" ? `block` : `hidden`} md:block md:col-span-5 lg:col-span-4 md:pr-[72px] md:border-r border-[#E7E7E7] overflow-y-auto hide-scrollbars`}>
                            <div className="border-b border-[#E7E7E7] mb-5 grid grid-cols-2 gap-4">
                                <div className="py-2 border-r border-[#E7E7E7] flex gap-2 items-center">
                                    <Icon name="search" colour={isLightMode ? "black" : "white"} showContainer={false} />
                                    <input
                                        placeholder="Search"
                                        className={`w-full bg-transparent placeholder:text-[#9D9C9E] font-semibold outline-none`}
                                        onChange={(e) => { setFontNameSearchString(e.target.value) }}
                                        value={fontNameSearchString}
                                    />
                                </div>
                                <div className="py-2 flex gap-2 items-center">
                                    <Icon name="edit" colour={isLightMode ? "black" : "white"} showContainer={false} />
                                    <input
                                        placeholder="Your text"
                                        className={`w-full bg-transparent placeholder:text-[#9D9C9E] font-semibold outline-none`}
                                        onChange={(e) => { setUserText(e.target.value) }}
                                        value={userText}
                                    />
                                </div>
                                <div className="flex gap-4 justify-between text-[#9D9C9E] mb-4">
                                </div>
                            </div>
                            {/* <div className="flex justify-between items-center mb-6">
                                <div className="flex items-end">
                                    <h2 className="text-[84px] font-semibold leading-none -mb-3">38</h2>
                                    <p className="leading-none text-[#9D9C9E]">new fonts</p>
                                </div>
                                <span className="px-4 py-2 rounded-full font-bold text-black bg-[#E7E7E7]">Filter</span>
                            </div> */}
                            {fontData.map((item, index) => {
                                return (
                                    <>
                                        {item.fontName.toLowerCase().includes(fontNameSearchString.toLowerCase()) &&
                                            <FontCard
                                                key={index}
                                                fontName={item.fontName}
                                                fontInView={fontInView}
                                                setFontInView={setFontInView}
                                                isLightMode={isLightMode}
                                                setPageStateForMobile={setPageStateForMobile}
                                            />
                                        }
                                    </>

                                )
                            })}
                        </div>
                        <div className={`col-span-12 ${pageStateForMobile === "sub" ? `block` : `hidden`} md:block md:col-span-7 lg:col-span-8 md:pl-[72px] overflow-y-auto hide-scrollbars`}>
                            <div className="flex gap-5 pb-5 border-b border-[#E7E7E7] mb-12">
                                <span
                                    className={`cursor-pointer transition-all duration-300 ${tab === "Style" ? `font-semibold ` : `text-[#9D9C9E]`}`}
                                    onClick={() => setTab("Style")}
                                >
                                    Style
                                </span>
                                <span
                                    className={`cursor-pointer transition-all duration-300 ${tab === "Glyphs" ? `font-semibold ` : `text-[#9D9C9E]`}`}
                                    onClick={() => setTab("Glyphs")}
                                >
                                    Glyphs
                                </span>
                                <span
                                    className={`cursor-pointer transition-all duration-300 ${tab === "Details" ? `font-semibold ` : `text-[#9D9C9E]`}`}
                                    onClick={() => setTab("Details")}
                                >
                                    Details
                                </span>
                                <span
                                    className={`cursor-pointer transition-all duration-300 ${tab === "License" ? `font-semibold ` : `text-[#9D9C9E]`}`}
                                    onClick={() => setTab("License")}
                                >
                                    License
                                </span>
                            </div>
                            <div key={tab + fontInView} className="animate__animated animate__fadeIn">
                                {tab === "Style" &&
                                    <StyleTab fontName={fontInView} isLightMode={isLightMode} userText={userText} />
                                }
                                {tab === "Glyphs" &&
                                    <GlyphsTab fontName={fontInView} />
                                }
                                {tab === "Details" &&
                                    <DetailsTab fontName={fontInView} />
                                }
                                {tab === "License" &&
                                    <LicenseTab fontName={fontInView} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="fixed bottom-0 w-screen h-[10vh]"
                style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${isLightMode ? `white` : `black`} 100%)`
                }}
            >
            </div>
        </>
    )
}
