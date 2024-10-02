export default function About() {
    return (
        <div className="animate__animated animate__fadeIn mt-24">
            <h1 className="text-[#747474] text-4xl font-semibold pb-8">ABOUT THE VALUES OF FREITAG</h1>
            <nav className="font-semibold flex gap-6 text-[#747474] mb-9 overflow-y-auto">
                <span className="text-white cursor-pointer">HISTORY</span>
                <span>MANIFESTO</span>
                <span>PRODUCTION</span>
                <span>HOLACRACY</span>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {historyCards.map((item, index) => {
                    return (
                        <HistoryCard key={index} card={item} />
                    )
                })}
            </div>
        </div>
    )
}

function HistoryCard({ card }: { card: HistoryCard }) {
    return (
        <div>
            <p className="text-[#EB6D54] mb-2">{card.highlight}</p>
            <h3 className="whitespace-pre-wrap text-2xl mb-6">{card.title}</h3>
            <div
                className="aspect-video w-full bg-cover mb-4 grayscale rounded-2xl"
                style={{
                    backgroundImage: `url('${process.env.NEXT_PUBLIC_LINK_PREFIX}/004/${card.year}.png')`,
                    backgroundRepeat: "no-repeat",
                }}
            >
            </div>
            <p className="mb-2">{card.year}</p>
            <p className="text-[#747474]">{card.description}</p>
        </div>
    )
}

type HistoryCard = {
    highlight: string,
    title: string,
    year: string,
    description: string,
}

const historyCards = [
    {
        highlight: "The first bag",
        title: `HISTORY OF FREITAG
THE FIRST MESSENGER BAG`,
        year: "1993",
        description: "In search of a functional, robust, water-repellent bag, brothers Daniel and Markus Freitag develop the original version of the iconic F13 TOP CAT messenger bag using old truck tarps, discarded bicycle inner tubes and car safety belts.",
    },
    {
        highlight: "The first store",
        title: `HISTORY OF FREITAG
THE FIRST STORE`,
        year: "1999",
        description: "The first FREITAG Store (F-Store) opens in Davos. We move into an industrial warehouse on the  Maag site in Zurich as a production facility and office building.",
    },
    {
        highlight: "The first flagship store",
        title: `HISTORY OF FREITAG
THE FIRST FLAGSHIP STORE`,
        year: "2006",
        description: "The FREITAG flagship store is erected next to the Hardbrucke in Zurich. The tower, built from 19 used freight containers, symbolises the company’s philosophy.",
    },
]