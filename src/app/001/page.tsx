export default function Home() {
    return (
        <div className="grid grid-cols-2 lg:min-h-screen">
            <div className="relative col-span-2 lg:col-span-1 pb-52 transition-all ease-in-out duration-300 delay-100">
                <nav className="flex gap-12 px-6 py-4">
                    <img src="/001/search-icon.svg" alt="search-icon" />
                    <span>Explore</span>
                    <span>Stories</span>
                </nav>
                <div className="px-6 lg:px-16 pt-6 lg:pt-24 transition-all ease-in-out duration-300 delay-100">
                    <h1 className="text-4xl lg:text-5xl mb-12">It’s never too late to try something new</h1>
                    <p className="mb-12">Three paths lead to knowledge: the path of reflection is the noblest, the path of imitation is the easiest, and the path of experience is the bitterest.</p>
                    <button className="rounded-full px-12 py-4 border border-white">Book now</button>
                </div>
                <img src="/001/hero-graphic.svg" alt="hero-graphic" className="w-2/3 sm:w-1/3 lg:w-1/2 absolute right-0 bottom-0" />
            </div>
            <div className="col-span-2 lg:col-span-1 mx-6 mb-6 lg:m-6 rounded-2xl lg:rounded-[32px] grid overflow-clip grid-cols-2 cursor-pointer transition-all ease-in-out duration-300 delay-100">
                <div
                    className="relative col-span-2 md:col-span-1 bg-[#323FFB] p-6 lg:p-9 flex flex-col justify-end group transition-all ease-in-out duration-300 delay-100"
                    style={{
                        backgroundImage: "url('/001/bg-1.svg')",
                        backgroundPosition: "0% 0%",
                        backgroundSize: "50%",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="mt-36">
                        <h2 className="text-4xl lg:text-5xl mb-4 lg:mb-8">Explore</h2>
                        <p>Explore the best place deals</p>
                    </div>
                    <ArrowWithHover />
                </div>
                <div
                    className="relative col-span-2 md:col-span-1 bg-[#FE7A26] p-6 lg:p-9 flex flex-col justify-end group transition-all ease-in-out duration-300 delay-100"
                    style={{
                        backgroundImage: "url('/001/bg-2.svg')",
                        backgroundPosition: "25% 25%",
                        backgroundSize: "40%",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="mt-36">
                        <h2 className="text-4xl lg:text-5xl mb-4 lg:mb-8">Stories</h2>
                        <p>Our customer and company stories</p>
                    </div>
                    <ArrowWithHover />
                </div>
                <div
                    className="relative col-span-2 md:col-span-1 bg-[#E7E3FE] p-6 lg:p-9 flex flex-col justify-end group transition-all ease-in-out duration-300 delay-100"
                    style={{
                        backgroundImage: "url('/001/bg-3.svg')",
                        backgroundPosition: "0% 0%",
                        backgroundSize: "70%",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="text-[#777CD7] mt-36">
                        <h2 className="text-4xl lg:text-5xl mb-4 lg:mb-8">About</h2>
                        <p>Our company history</p>
                    </div>
                    <ArrowWithHover />
                </div>
                <div
                    className="relative col-span-2 md:col-span-1 bg-[#777CD7] p-6 lg:p-9 flex flex-col justify-end group transition-all ease-in-out duration-300 delay-100"
                >
                    <img
                        src="/001/bg-4.svg"
                        alt="background image for help"
                        className="absolute w-1/3 lg:w-[40%] top-6 lg:top-8 left-6 lg:left-8"
                    />
                    <div className="mt-36">
                        <h2 className="text-4xl lg:text-5xl mb-4 lg:mb-8">Help</h2>
                        <p>FAQ and support</p>
                    </div>
                    <ArrowWithHover />
                </div>
            </div>
        </div>
    )
}


function ArrowWithHover() {
    return (
        <span className="text-4xl lg:text-5xl absolute top-4 right-4 group-hover:translate-x-1 group-hover:-translate-y-1 ease-in-out duration-300">↗</span>
    )
}