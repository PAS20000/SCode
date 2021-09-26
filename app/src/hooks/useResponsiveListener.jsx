import { useEffect, useState } from "react"

const useReponsiveListener = () => {
    const [windowSize, setWindowSize] = useState(['width', 'height'])

    useEffect(() => {
        const h = window.innerHeight
        const w = window.innerWidth
        setWindowSize([w,h])
    } , [])


    return { windowSize }
}


export default useReponsiveListener