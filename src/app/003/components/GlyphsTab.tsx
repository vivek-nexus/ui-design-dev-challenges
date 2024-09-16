import { LoadFont } from "./LoadFont"

const glyphs = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9", "!", "@", "#", "$",
    "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
    "[", "]", "{", "}", "\\", "|", ";", ":", "'", "\"",
    ",", ".", "/", "<", ">", "?", "~", "`", "±", "©",
    "®", "™", "•", "—", "–", "«", "»", "§", "¶", "∞",
    "÷", "×", "←", "→", "↑", "↓", "±", "√", "∑", "∏",
    "∞", "≠", "≈", "≤", "≥", "—"
]


export default function GlyphsTab({ fontName }: { fontName: string }) {
    return (
        <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 rounded">
            {glyphs.map((item, index) => {
                return (
                    <p key={index} className={`p-4 text-2xl border border-[#E7E7E7] flex items-center justify-center ${LoadFont(fontName)?.className}`}>
                        {item}
                    </p>
                )
            })}
        </div>
    )
}