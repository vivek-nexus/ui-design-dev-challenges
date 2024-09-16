import { Plus_Jakarta_Sans, Krona_One, Abril_Fatface, Ysabeau_Infant, Kalnia } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
})

const kronaOne = Krona_One({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})

const abrilFatface = Abril_Fatface({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})

const ysabeauInfant = Ysabeau_Infant({
    subsets: ['latin'],
    display: 'swap',
})

const kalnia = Kalnia({
    subsets: ['latin'],
    display: 'swap',
})

export function LoadFont(fontName: string) {
    switch (fontName) {
        case "Plus Jakarta Sans":
            return plusJakartaSans
        case "Krona One":
            return kronaOne
        case "Abril Fatface":
            return abrilFatface
        case "Ysabeau Infant":
            return ysabeauInfant
        case "Kalnia":
            return kalnia
        default:
            break;
    }
}
