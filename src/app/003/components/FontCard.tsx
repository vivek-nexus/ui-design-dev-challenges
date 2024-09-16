import { Dispatch, SetStateAction } from "react";
import { FontData, fontData } from "../fontData";
import { Icon } from "./Icon";
import { LoadFont } from "./LoadFont";


export default function FontCard({ fontName, fontInView, setFontInView, isLightMode, setPageStateForMobile }: { fontName: string, fontInView: string, setFontInView: Dispatch<SetStateAction<string>>, isLightMode: boolean, setPageStateForMobile: Dispatch<SetStateAction<"main" | "sub">> }) {
    let font: FontData | undefined
    for (const item of fontData) {
        if (fontName === item.fontName) {
            font = item
        }
    }

    return (
        <>
            {font ?
                <div
                    className={`relative mb-12 cursor-pointer ${font.special ? `p-6 ${isLightMode ? `bg-[#F7E5F0]` : `bg-[#5c4251]`}   rounded-[32px]` : ``}`}
                    onClick={() => {
                        setFontInView(font.fontName)
                        setPageStateForMobile("sub")
                    }}
                >
                    <div className="flex gap-4 justify-between">
                        <h3 className={`text-[32px] font-bold leading-none mb-4 ${LoadFont(font.fontName)?.className}`}>{font.fontName}</h3>
                        <div className="flex gap-2 h-min">
                            <Icon name="bookmark" colour={isLightMode ? "black" : "white"} showContainer={true} />
                            <Icon name="download" colour={isLightMode ? "black" : "white"} showContainer={true} />
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between text-[#9D9C9E]">
                        <p>By {font.by}</p>
                        <p>{font.styles.length} style{font.styles.length > 1 && `s`}</p>
                    </div>
                    {font.special &&
                        <div className="mt-24">
                            <Icon name="arrow" colour={isLightMode ? "black" : "white"} showContainer={false} />
                            <span className={`absolute -bottom-6 right-6 text-[500%] text-[#FF0000] font-bold ${LoadFont(font.fontName)?.className}`}>123</span>
                        </div>
                    }
                    {font.fontName === fontInView &&
                        <div className="hidden md:block absolute top-1/2 -translate-y-[20px] -right-12">
                            <svg width="20" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.619709 37.989L0.61971 0.749916L32.8697 19.3695L0.619709 37.989Z" fill="#9B9B9B" />
                            </svg>
                        </div>}
                </div>
                :
                <div>
                    Unknown font!
                </div>

            }
        </>

    )
}