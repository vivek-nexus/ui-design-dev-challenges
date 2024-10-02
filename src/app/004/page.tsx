"use client"

import Link from "next/link"

export default function Home() {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="grid md:hidden gap-2">
                <Card1 />
                <div className="grid grid-cols-2 gap-2 h-64">
                    <Card2 />
                    <Card3 />
                </div>
                <Card4 />
            </div>
            <div className="hidden md:grid grid-cols-3 gap-3">
                <div className="col-span-2 grid gap-3">
                    <Card1 />
                    <Card4 />
                </div>
                <div className="col-span-1 grid gap-3">
                    <Card2 />
                    <Card3 />
                </div>
            </div>
        </div>


    )
}

function Card1() {
    return (
        <>
            <style jsx>
                {`
                    .home-card-1{
                        background-image: url('${process.env.NEXT_PUBLIC_LINK_PREFIX}/004/news.png'), linear-gradient(180deg, #DCDCDC 22.64%, #DCDCDC 39.84%, #C7C8C8 87.47%);
                        background-repeat: no-repeat;
                    }
                `}
            </style>
            <div className="rounded-2xl home-card-1 bg-cover p-6 flex flex-col justify-end">
                <div className="text-black mt-72 md:mt-80">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-2">NEWS</h2>
                    <p className="text-[#484848]">FREITAG newsletters are free. <br />In digestible gaps. Usually colorful.</p>
                </div>
            </div>
        </>
    )
}

function Card2() {
    return (
        <Link href="/004/shop/bags">
            <div className="h-full text-black bg-[#EB694D] pt-8 rounded-2xl flex flex-col justify-between">
                <h2 className="text-xl md:text-2xl font-semibold text-center">BAGS</h2>
                <img
                    src={`${process.env.NEXT_PUBLIC_LINK_PREFIX}/004/bags.png`}
                    alt="bag"
                    className="w-3/4 mx-auto"
                />
            </div>
        </Link>
    )
}

function Card3() {
    return (
        <div className="text-black bg-[#F4DD74] rounded-2xl pt-8 flex flex-col justify-between">
            <h2 className="text-xl md:text-2xl font-semibold text-center">ACCESSORIES</h2>
            <img
                src={`${process.env.NEXT_PUBLIC_LINK_PREFIX}/004/accessories.png`}
                alt="bag"
                className="w-1/2 mx-auto"
            />
        </div>
    )
}

function Card4() {
    return (
        <>
            <style jsx>
                {`
                    .home-card-4{
                        background-image: url('${process.env.NEXT_PUBLIC_LINK_PREFIX}/004/apparel.png');
                        background-repeat: no-repeat;
                    }
                `}
            </style>
            <div className="rounded-2xl aspect-video home-card-4 bg-cover p-6">
                <h2 className="text-2xl font-semibold mb-2 text-right">F-ABRIC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br /> APPAREL</h2>
            </div>
        </>
    )
}


