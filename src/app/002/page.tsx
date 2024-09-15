"use client"

import { Inter } from 'next/font/google'
import { useState } from 'react'
import { weatherData } from './weatherData'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export default function Home() {
    const [item, setItem] = useState(0)

    return (
        <div
            className={`min-h-screen transition-all ease-in-out duration-300 delay-100`}
            style={{
                backgroundColor: weatherData[item].backgroundColour,
                color: weatherData[item].textColour,
            }}
        >
            <style jsx>
                {`
                    hr{
                        border: 1.5px solid ${weatherData[item].textColour};        
                    }
                    .no-colour-transition{
                        transition: all 300ms ease-in-out, color 0ms;
                    }
                `}
            </style>
            <div
                className="fixed bottom-0 w-screen h-[10vh]"
                style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${weatherData[item].backgroundColour} 100%)`
                }}
            >
            </div>
            <div className={`p-6 pb-12 mx-auto max-w-[1024px]`}>
                <nav className="mb-12 md:mb-24">
                    <div className="mb-12 flex justify-between items-center">
                        <div className="w-16 cursor-pointer">
                            <hr className={`mb-4`} />
                            <hr />
                        </div>
                        <div className="cursor-pointer">
                            <SearchIcon colour={weatherData[item].textColour} />
                        </div>
                    </div>
                    <hr className={`border-[${weatherData[item].textColour}]`} />
                </nav>
                <div className="flex flex-wrap no-colour-transition ease-in-out duration-300 delay-100">
                    <div className="font-extrabold basis-full md:basis-1/2 mb-12 md:pr-12 no-colour-transition ease-in-out duration-300 delay-100">
                        <div className="flex gap-4 items-center mb-4 cursor-pointer"
                            onClick={() => {
                                if (item === 0) {
                                    setItem(1)
                                }
                                else if (item === 1) {
                                    setItem(0)
                                }
                            }}
                        >
                            {item === 1 && <LocationIcon />}
                            <p>
                                {weatherData[item].location}
                            </p>
                        </div>
                        <p className="font-semibold mb-4">{weatherData[item].timeStamp}</p>
                        <h1 className={`text-[192px] leading-none mb-4 ${inter.className}`}>
                            {weatherData[item].temperature}
                        </h1>
                        <div className="flex justify-between text-2xl mb-12 md:mb-6">
                            <h2>{weatherData[item].description}</h2>
                            <h2>{weatherData[item].temperatureRange}</h2>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <p>Wind: {weatherData[item].windSpeed}</p>
                            <p>Precipitation: {weatherData[item].precipitation}</p>
                        </div>
                    </div>
                    <div className="basis-full md:basis-1/2 md:pl-12 font-semibold no-colour-transition ease-in-out duration-300 delay-100">
                        <h3 className="mb-4">Hourly</h3>
                        <hr className="mb-4" />
                        <table className="w-full">
                            <tbody>
                                {weatherData[item].hourlyData.map((element, index) => {
                                    return (
                                        <tr className="flex gap-4 pb-2">
                                            <td className="w-[30%]">{element.time}</td>
                                            <td className="w-[35%]">Clear</td>
                                            <td className="w-[5%] flex items-center">
                                                <DropIcon colour={weatherData[item].textColour} />
                                            </td>
                                            <td className="w-[20%]">0%</td>
                                            <td className="w-[10%] text-right">{element.temperature}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

function SearchIcon({ colour }: { colour: String }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={`${colour}`}><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
    )
}

function DropIcon({ colour }: { colour: String }) {
    return (
        <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.98955 6.42481C1.82763 6.41858 0.853838 5.34656 1.01817 4.1963C1.16818 3.14629 2.00388 2.05346 2.00388 2.05346C2.00388 2.05346 2.60463 1.28205 2.98554 0.582321C3.84668 1.90349 4.76808 2.6749 4.98236 4.1963C5.14519 5.35239 4.15704 6.43108 2.98955 6.42481Z" fill={colour} />
            <path d="M2.98955 0.574951C2.98955 0.574951 2.98711 0.579443 2.98554 0.582321M2.98554 0.582321C3.84668 1.90349 4.76808 2.6749 4.98236 4.1963C5.14519 5.35239 4.15704 6.43108 2.98955 6.42481C1.82763 6.41858 0.853838 5.34656 1.01817 4.1963C1.16818 3.14629 2.00388 2.05346 2.00388 2.05346C2.00388 2.05346 2.60463 1.28205 2.98554 0.582321Z" stroke={colour} stroke-width="0.0428561" />
        </svg>

    )
}

function LocationIcon() {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_56_42" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_56_42)">
                <path d="M12 12.5C12.55 12.5 13.0208 12.3042 13.4125 11.9125C13.8042 11.5208 14 11.05 14 10.5C14 9.95 13.8042 9.47917 13.4125 9.0875C13.0208 8.69583 12.55 8.5 12 8.5C11.45 8.5 10.9792 8.69583 10.5875 9.0875C10.1958 9.47917 10 9.95 10 10.5C10 11.05 10.1958 11.5208 10.5875 11.9125C10.9792 12.3042 11.45 12.5 12 12.5ZM12 22.5C9.31667 20.2167 7.3125 18.0958 5.9875 16.1375C4.6625 14.1792 4 12.3667 4 10.7C4 8.2 4.80417 6.20833 6.4125 4.725C8.02083 3.24167 9.88333 2.5 12 2.5C14.1167 2.5 15.9792 3.24167 17.5875 4.725C19.1958 6.20833 20 8.2 20 10.7C20 12.3667 19.3375 14.1792 18.0125 16.1375C16.6875 18.0958 14.6833 20.2167 12 22.5Z" fill="white" />
            </g>
        </svg>

    )
}