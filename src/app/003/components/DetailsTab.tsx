import { fontData, FontData } from "../fontData"

export default function DetailsTab({ fontName }: { fontName: string }) {
    let font: FontData | undefined
    for (const item of fontData) {
        if (fontName === item.fontName) {
            font = item
        }
    }

    return (
        <p className="whitespace-pre-line">{font?.details}</p>
    )
}