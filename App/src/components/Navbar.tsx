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
            <Link to="/auth">Authenticate</Link> 
            {isLoggedIn ? <Link to="/settings">Settings</Link> : null}
=======
            {isLoggedIn ? <Link to="/profile">Profile</Link> : null}
>>>>>>> b1fe8a320793c468d6e261aca43324a037bc4536
            {isLoggedIn ? <Link to="/preview">Card Preview</Link> : null} 
        </nav>
    )
}

export default Navbar;