
import "../13-04-2026/Localstorage.css";

export function Localstorage({theme, setTheme}){

    

    const toggleTheme = ()=>{

        setTheme(prev => (
            prev === "light" ? "dark" : "light"
        ));

    }


    return(
        <div>
                <h1>Toggle with LocalStorage</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}