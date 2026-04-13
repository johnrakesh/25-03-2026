import { NavLink } from "react-router-dom";
import "./shopping.css"


export function Shopping(){


    return(
        <>
            <nav>
                <div  className="navbar">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/mens-fashion" className="nav-link">Mens Fashion</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                </div>
            </nav>
        </>
    )
}