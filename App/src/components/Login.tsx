import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
import '../styles/Login.css'

export const Login = () => {    
    return (
        <>
        <Navbar isLoggedIn={false}/>
            <div>
                <h1>Login</h1>
                <div className="container">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <Link to="/signup">Don't have an account?</Link>
                </div>
            </div>
        </>
    )
}

export default Login;