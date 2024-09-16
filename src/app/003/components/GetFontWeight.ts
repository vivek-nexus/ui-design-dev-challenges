export function GetFontWeight(style: string) {
    switch (style) {
        case "Thin":
            return 100
        case "ExtraLight":
            return 200
        case "Light":
            return 300
        case "Regular":
            return 400
        case "Medium":
            return 500
        case "SemiBold":
            return 600
        case "Bold":
            return 700
        case "ExtraBold":
            return 800
        default:
            break;
    }
}