import { Navbar } from './Navbar'
import '../styles/Main.css'
import '../styles/Signup.css'

export const Signup = () => {
    return (
        <>
        <Navbar />
            <div>
                <h1>Sign Up</h1>
                <div className="container">
                    <input type="email" placeholder="First Name"/>
                    <input type="email" placeholder="Last Name"/>
                    <input type="number" placeholder="Phone Number"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confrim Password"/>
                </div>
            </div>
        </>
    )
}

export default Signup;