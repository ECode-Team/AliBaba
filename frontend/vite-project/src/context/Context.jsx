import {createContext, use, useEffect, useState} from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [activeSection, setActiveSection] = useState("user-dashboard")
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [rtlLang, setRtl] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener("resize" , handleResize)
        return () => window.removeEventListener("resize" , handleResize)
    }, []);

    return (
        <AppContext value={{
            activeSection ,
            setActiveSection,
            isMobile,
            rtlLang,
            setRtl
        }}>
            {children}
        </AppContext>
    )
}

export const useGlobalContext = () => use(AppContext)