import React from 'react';
import useUser from '../hooks/useUser';

export default function MoreInfo() {
    const { user, password } = useUser();
    console.log(user);
    return (
        <div>
            <h1>Información del usuario</h1>
            <p>Usuario: {user}</p>
            <p>Password: {password}</p>
        </div>
    )
}