import { Link } from 'react-router-dom'
import  '../styles/Navbar.css'
export const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </nav>
    )
}

export default Navbar;