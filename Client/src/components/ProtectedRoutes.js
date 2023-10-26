import React, {useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoutes = () => {
    const [token, setToken] = useState(null);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      async function getToken() {
        try {
            const { data: token } = await axios({
                method: "get",
                url: `${import.meta.env.VITE_REACT_APP_API_URL}jwtid`,
                withCredentials: true,
            });
            setToken(token);
        } catch (err) {
            console.log('err axios', err);
            setRedirect(true);
        }
      }
      getToken();
    }, [])

    if (redirect === true) {
        return <Navigate to="/"/>;
    }
            
    if (token !== null)
        return <Outlet />;
    else
        return <h1>…</h1>;
};
export default ProtectedRoutes;