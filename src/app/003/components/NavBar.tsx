import { Dispatch, SetStateAction } from "react";
import { Icon } from "./Icon";

export default function NavBar({ state, isLightMode, setIsLightMode, setNavState }: { state: "main" | "sub", isLightMode: boolean, setIsLightMode: Dispatch<SetStateAction<boolean>>, setNavState: Dispatch<SetStateAction<"main" | "sub">> }) {
    return (
        <nav className="flex justify-between items-center px-6 py-4 border-b border-[#E7E7E7] mb-12">
            {((state === "main") || (window.innerWidth > 768)) &&
                <>
                    <div className="text-3xl md:text-7xl">
                        <span className="text-[#9B9B9B] font-light">Find</span>
                        <span className="font-extrabold">Your</span>
                        <span className="text-[#9B9B9B] font-semibold">Fonts</span>
                    </div>
                    <div className="flex gap-2">
                        <div
                            className={`w-6 h-6 rounded-full border-2 bg-white ${isLightMode ? `border-black` : `border-white`}  cursor-pointer`}
                            onClick={() => setIsLightMode(true)}
                        >
                        </div>
                        <div
                            className={`w-6 h-6 rounded-full border-2 bg-black ${isLightMode ? `border-black` : `border-white`} bg-black cursor-pointer`}
                            onClick={() => setIsLightMode(false)}
                        >
                        </div>
                    </div>
                </>
            }
            {((state === "sub") && (window.innerWidth <= 768)) &&
                <>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={() => setNavState("main")}>
                        <Icon name="chevron" colour={isLightMode ? "black" : "white"} showContainer={false} />
                        <span className="text-2xl font-bold">Back</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Icon name="bookmark" colour={isLightMode ? "black" : "white"} showContainer={true} />
                        <Icon name="download" colour={isLightMode ? "black" : "white"} showContainer={true} />
                    </div>
                </>
            }
        </nav>
    )
}


