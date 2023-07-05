import { Navbar } from './Navbar'
import '../styles/Main.css'
import '../styles/Home.css'
import image from '../assets/card_sample.jpg'
export const Home = () => {
    return (
        <>
        <Navbar />
            <div>
                <h1>Business Card Generation</h1>
                <h2>Make a lasting impression with professionally designed business cards. Our Business Card Generator provides you with the tools to effortlessly create custom cards that showcase your unique brand. Whether you're a freelancer, entrepreneur, or a small business owner, our user-friendly interface will help you stand out from the crowd.</h2>
                <img src={image} alt="Image" />
            </div>
        </>
    )
}

export default Home