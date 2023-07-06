import { Link } from 'react-router-dom'
import  '../styles/Navbar.css'
import '../styles/Main.css'

export const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {isLoggedIn ? null : <Link to="/login">Log In</Link>}
            {isLoggedIn ? null : <Link to="/signup">Sign Up</Link>}
            <Link to="/generate">Generate a card</Link>
<<<<<<< HEAD
            {isLoggedIn ? <Link to="/profile">Profile</Link> : null}
=======
            {isLoggedIn ? <Link to="/settings">Settings</Link> : null}
            {isLoggedIn ? <Link to="/preview">Card Preview</Link> : null} 
>>>>>>> 2dee1d321957b0831073b68997c3446c3887cd3e
        </nav>
    )
}

export default Navbar;