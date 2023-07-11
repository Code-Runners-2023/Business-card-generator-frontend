import bcrypt from 'bcryptjs'
const url = 'https://localhost:44376/users/login';

export async function login(email: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 1);
    console.log(hashedPassword);

    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'accept': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: <string>hashedPassword,
        })
    })
    .then(response => response.json());
}
