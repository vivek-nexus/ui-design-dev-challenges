export function Icon({ name, colour, showContainer }: { name: string, colour: string, showContainer: boolean }) {
    switch (name) {
        case "chevron":
            return (
                <IconContainer showContainer={showContainer}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 24L12 16L20 8" stroke={colour} stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></IconContainer>
            )
        case "bookmark":
            return (
                <IconContainer showContainer={showContainer}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.248 15.75L8.99805 12L3.74805 15.75V3.75C3.74805 3.35218 3.90608 2.97064 4.18739 2.68934C4.46869 2.40804 4.85022 2.25 5.24805 2.25H12.748C13.1459 2.25 13.5274 2.40804 13.8087 2.68934C14.09 2.97064 14.248 3.35218 14.248 3.75V15.75Z" stroke={colour} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></IconContainer>
            )
        case "download":
            return (
                <IconContainer showContainer={showContainer}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99902 3.74988V14.2499" stroke={colour} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.25 9L9 14.25L3.75 9" stroke={colour} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></IconContainer>
            )
        case "add":
            return (
                <IconContainer showContainer={showContainer}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3.33325V12.6666" stroke={colour} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.33398 8H12.6673" stroke={colour} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </IconContainer>
            )
        case "search":
            return (
                <IconContainer showContainer={showContainer}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke={colour} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.5 17.5L13.875 13.875" stroke={colour} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></IconContainer>
            )
        case "edit":
            return (
                <IconContainer showContainer={showContainer}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_43_158)">
                            <path d="M14.166 2.50005C14.3849 2.28118 14.6447 2.10756 14.9307 1.98911C15.2167 1.87066 15.5232 1.80969 15.8327 1.80969C16.1422 1.80969 16.4487 1.87066 16.7347 1.98911C17.0206 2.10756 17.2805 2.28118 17.4993 2.50005C17.7182 2.71892 17.8918 2.97875 18.0103 3.26472C18.1287 3.55069 18.1897 3.85719 18.1897 4.16672C18.1897 4.47624 18.1287 4.78274 18.0103 5.06871C17.8918 5.35468 17.7182 5.61451 17.4993 5.83338L6.24935 17.0834L1.66602 18.3334L2.91602 13.75L14.166 2.50005Z" stroke={colour} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_43_158">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </IconContainer>
            )
        case "arrow":
            return (
                <IconContainer showContainer={showContainer}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 18.0022H28.5" stroke={colour} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 7.5L28.5 18L18 28.5" stroke={colour} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </IconContainer>
            )
        default:
            <IconContainer showContainer={showContainer}>
                <></>
            </IconContainer>
    }
}

function IconContainer({ showContainer, children }: { showContainer: boolean, children: React.ReactNode }) {
    return (<div className={showContainer ? `border border-[#9D9C9E] rounded-full p-2 cursor-pointer` : ``}>
        {children}
    </div>)
}