export default function Bag() {
    return (
        <div className="grid grid-col-1 md:grid-cols-2 gap-12 mt-24 animate__animated animate__fadeIn">
            <div>
                <img
                    src={`${process.env.NEXT_PUBLIC_LINK_PREFIX}/004/hero-bag-photo.png`}
                    alt="bag-photo"
                    className="w-full rounded-3xl"
                />
            </div>
            <div>
                <h3 className="font-semibold mb-12">F731 HOLEY JULIEN</h3>
                <p className="font-bold text-[#747474] mb-4">Small multi-use city backpack with love handles, adjustable shoulder straps, inner compartments and a zippered outer pocket.</p>
                <p className="font-bold text-[#747474] mb-4">Small multi-use city backpack with love handles, adjustable shoulder straps, inner compartments and a zippered outer pocket.</p>
                <div className="flex gap-4 justify-between mb-12">
                    <p className="font-bold text-xl">Colour: Silver</p>
                    <p className="font-bold text-xl">$ 250.65</p>
                </div>
                <div className="fixed bottom-0 left-0 right-0 p-4 md:px-0 bg-black backdrop-blur-lg md:relative md:bottom-auto md:left-auto md:right-auto grid grid-cols-2 gap-4"
                >
                    <button className="bg-[#EB6D54] font-semibold p-2 sm:px-8 rounded-lg w-full sm:w-auto">BUY</button>
                    <button className="font-semibold p-2 sm:px-8 rounded-lg w-full sm:w-auto">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}