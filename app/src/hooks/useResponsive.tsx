import { useEffect, useState } from "react"

export default function useResponsive(){
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    
    useEffect(() => {
        const w = window.innerWidth
        const h = window.innerHeight
        setWidth(w)
        setHeight(h)
    },[])

    return{ width, height }
}