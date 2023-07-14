import * as CryptoJS from "crypto-js";

export async function login(email: string, password: string) {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    console.log(hashedPassword);
    const url = 'https://localhost:44376/users/login';
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'accept': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'     },
        body: JSON.stringify({
            email: email,
            password: hashedPassword,
        })
    })
    .then(response => saveIntoSessionStorage(response));
}

export async function saveIntoSessionStorage(resp: Response){
    console.log(resp);
    const respJson = await resp.json();
    console.log(respJson)
    sessionStorage.setItem("itemId", respJson.id);
    sessionStorage.setItem("itemToken", respJson.jwtToken);
    console.log(respJson.jwtToken);
}