import { Navbar } from './Navbar'
import '../styles/CardGenerator.css'
import '../styles/Main.css'
import { ImageUpload } from './ImageUpload'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, ChangeEvent } from 'react'

export const CardGenerator = () => {
    const isLoggedIn = false;
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [position, setPosition] = useState('');
    const [generatedContent, setGeneratedContent] = useState<JSX.Element | null>(null);
  
    const handleCompanyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompanyName(e.target.value);
    };
  
    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };
  
    const handlePositionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPosition(e.target.value);
    };
  
    const handleGenerate = () => {
        console.log('Company Name:', companyName);
        console.log('Address:', address);
        console.log('Position:', position);
    
        const generatedElements = (
            <div>
                <p>{companyName}</p>
                <p>{address}</p>
                <p>{position}</p>
            </div>
        );

        setGeneratedContent(generatedElements);
    };
  
    return (
        <>
        <Navbar isLoggedIn={isLoggedIn}/>
            <div>
                <h1>Generate a Card</h1>
                <div className="container">
                    <input type="email" placeholder="Company name" value={companyName} onChange={handleCompanyNameChange}/>
                    <input type="email" placeholder="Address" value={address} onChange={handleAddressChange}/>
                    <input type="email" placeholder="Position" value={position} onChange={handlePositionChange}/>
                    <h3>Upload a Logo</h3>
                    <ImageUpload />
                    <button onClick={handleGenerate}>Generate</button>
                </div>
            </div>
            <div>{generatedContent}</div>
        </>
    );
};
export default CardGenerator;