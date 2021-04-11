import { useState } from 'react';

export default function useToken() {
  
    const getToken = () => {
        const tokenString = localStorage.getItem('token2');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token2', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    return {
        setToken: saveToken,
        token
    }
}