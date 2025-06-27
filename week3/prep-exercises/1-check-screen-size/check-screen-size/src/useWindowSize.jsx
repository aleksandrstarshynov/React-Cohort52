import React, {useState, useEffect, useDebugValue} from 'react';


function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined })
    
    useDebugValue(`now width is: ${windowSize.width}px, height: ${windowSize.height}px`)

    useEffect(() => {
        const handleResize = () =>
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })

        window.addEventListener("resize", handleResize)
        handleResize() 

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}

export { useWindowSize}
