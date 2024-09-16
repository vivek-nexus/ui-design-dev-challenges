import { fontData, FontData } from "../fontData"
import { GetFontWeight } from "./GetFontWeight"
import { Icon } from "./Icon"
import { LoadFont } from "./LoadFont"

export default function StyleTab({ fontName, isLightMode, userText }: { fontName: string, isLightMode: boolean, userText: string }) {
    let font: FontData | undefined
    for (const item of fontData) {
        if (fontName === item.fontName) {
            font = item
        }
    }

    return (
        <>
            {font ?
                <div key={fontName} className="animate__animated animate__fadeIn">
                    <div className="md:hidden border-b border-[#E7E7E7] mb-12">
                        <h2 className={`text-[36px] font-bold leading-none mb-4 ${LoadFont(font.fontName)?.className}`}>{font?.fontName}</h2>
                        <div className="flex gap-4 justify-between text-[#9D9C9E] mb-4">
                            <p>By {font.by}</p>
                            <p>{font.styles.length} style{font.styles.length > 1 && `s`}</p>
                        </div>
                    </div>
                    <div>
                        {font.styles.map((item, index) => {
                            return (
                                <div key={index} className="py-4 border-b border-[#E7E7E7]">
                                    <div className="flex gap-4 justify-between mb-4">
                                        <p>{item}</p>
                                        <Icon name="add" colour={isLightMode ? "black" : "white"} showContainer={true} />
                                    </div>
                                    <p
                                        className={`text-[72px] ${LoadFont(font.fontName)?.className}`}
                                        style={{ fontWeight: GetFontWeight(item) }}
                                    >
                                        {userText ? userText : `Aa Bb`}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                :
                <div></div>
            }
        </>
    )
}