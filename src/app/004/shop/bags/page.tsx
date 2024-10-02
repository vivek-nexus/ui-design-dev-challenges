import Link from "next/link"

export default function Bags() {
    return (
        <div className="grid grid-cols-3 gap-12 animate__animated animate__fadeIn mt-24">
            <div className="col-span-3 md:col-span-1">
                <Link href="/004/shop/bags/bag">
                    <div>
                        <div
                            className="w-full aspect-square rounded-3xl mb-4 flex flex-col justify-center items-center bg-cover bg-no-repeat"
                            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${process.env.NEXT_PUBLIC_LINK_PREFIX}/004/hero-bag-photo.png')` }}
                        >
                            <p className="font-semibold mb-2 text-[12px]">FASHION AND STYLE</p>
                            <h3 className="font-semibold text-xl mb-4">F731 HOLEY JULIEN</h3>
                        </div>
                        <p className="font-bold text-[#747474] mb-4 overflow-clip line-clamp-2 text-ellipsis">Small multi-use city backpack with love handles, adjustable shoulder straps, inner compartments and a zippered outer pocket.</p>
                        <p className="font-bold text-xl mb-4">$ 250.65</p>
                        <button className="hidden md:block bg-[#EB6D54] font-semibold p-2 sm:px-8 rounded-lg w-full sm:w-auto">CART</button>
                    </div>
                </Link>
            </div>
            <div className="col-span-3 md:col-span-2">
                <BagListItem />
                <BagListItem />
                <BagListItem />
                <BagListItem />
                <BagListItem />
                <BagListItem />
                <BagListItem />
                <BagListItem />
            </div>
        </div >
    )
}

function BagListItem() {
    return (
        <Link href="/004/shop/bags/bag">
            <div className="grid grid-cols-4 gap-9 mb-12" >
                <div className="col-span-2 sm:col-span-3 md:col-span-3 flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold mb-4">F731 HOLEY PETE</h3>
                        <p className="font- text-[#747474] mb-4 overflow-clip line-clamp-2 sm:line-clamp-2 text-ellipsis">Small multi-use city backpack with love handles, adjustable shoulder straps, inner compartments and a zippered outer pocket.</p>
                    </div>
                    <div>
                        <p className="font-bold text-xl mb-4">$ 250.65</p>
                        <button className="bg-[#EB6D54] font-semibold p-2 sm:px-8 rounded-lg w-full sm:w-auto">CART</button>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 md:col-span-1 self-end">
                    <img
                        src={`${process.env.NEXT_PUBLIC_LINK_PREFIX}/004/bag-photo.png`}
                        alt="bag-photo"
                        className="w-full"
                    />
                </div>
            </div>
        </Link>
    )
}