import { Navbar } from './Navbar'
import '../styles/Main.css'
import '../styles/Login.css'

export const Login = () => {
    return (
        <>
        <Navbar />
            <div>
                <h1>Login</h1>
                <div className="container">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
        </>
    )
}

export default Login;