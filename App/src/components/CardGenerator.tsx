import { Navbar } from './Navbar'
import '../styles/CardGenerator.css'
import '../styles/Main.css'
import { ImageUpload } from './ImageUpload'
import "bootstrap/dist/css/bootstrap.min.css";

export const CardGenerator = () => {
    const isLoggedIn = false;

    return (
        <>
        <Navbar isLoggedIn={isLoggedIn}/>
            <div>
                <h1>Generate a Card</h1>
                <div className="container">
                    <input type="email" placeholder="Company name"/>
                    <input type="email" placeholder="Address"/>
                    <input type="email" placeholder="Position"/>
                    <h3>Upload a Logo</h3>
                    <ImageUpload />
                </div>
            </div>
        </>
    );
};
export default CardGenerator;