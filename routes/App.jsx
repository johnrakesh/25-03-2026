
import { Link } from "react-router-dom";
import "./navbar.css"



export function Navbar({theme}){


    return(
        <>
            <nav className={`navbar ${theme}`}>
                <div  >
                   
                    <Link to="/" className="nav-link">Register User</Link>
                    <Link to="/users" className="nav-link">Users</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>
            </nav>
        </>
    )
}