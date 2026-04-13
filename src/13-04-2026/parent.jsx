import { useState, useEffect } from "react";
import { Localstorage } from "./Localstorage";
import { Navbar } from "../components/Navbar";

export function Root() {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;

    }, [theme]);

    return (
        <>
            <Navbar theme={theme} />
            <Localstorage theme={theme} setTheme={setTheme} />
        </>


    )
}