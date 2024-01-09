import { useEffect, useState } from "react"
import { throttle } from "underscore"

function useScrollPosition() {
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const scroll = throttle(function () {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        }, 200)


        window.addEventListener("scroll", scroll)
        return () => {
            window.removeEventListener("scroll", scroll)
        }
    }, [])

    return { scrollX, scrollY }
}

export default useScrollPosition