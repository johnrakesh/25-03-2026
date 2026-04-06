import { Link } from "react-router-dom";
import "./navbar.css"


export function Navbar(){


    return(
        <>
            <nav>
                <div  className="navbar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/register" className="nav-link">Register User</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>
            </nav>
        </>
    )
}