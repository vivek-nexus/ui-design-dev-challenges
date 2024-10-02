"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Shop() {
    const router = useRouter()
    useEffect(() => {
        router.push("/004/shop/bags")
    }, [])
}