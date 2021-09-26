import { useEffect, useState } from "react"

const useCallAction = ([normalClass, changeClass, time]) => {
    const [ClassName, setClassName] = useState(normalClass)
    const [click, setClick] = useState(false)
    const timer = () => setTimeout(() => {

        !click && ClassName === normalClass ? setClassName(changeClass):setClassName(normalClass)

    }, time);

    useEffect(() => {
       timer()
    } , [ClassName])

    useEffect(() => {
        timer()

        return () => {
            setClassName(normalClass)
        }
    } ,[])

    return { ClassName, setClick }
}




export default useCallAction