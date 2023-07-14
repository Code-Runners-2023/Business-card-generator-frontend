import jwt, { JwtPayload } from 'jsonwebtoken';

function checkJTW(): boolean {
    const token = sessionStorage.getItem('jwt');

    if (token) {
        try {
            const decodedToken = jwt.verify(token, 'your-secret-key') as JwtPayload;

            const currentTimestamp = Math.floor(Date.now() / 1000);
            if (decodedToken.exp && decodedToken.exp >= currentTimestamp) {
                return true;
            } else {
                console.error('JWT Expired');
            }
        } catch (error) {
            console.error('Error decoding JWT:', error);
        }
    }

    return false;
}
      