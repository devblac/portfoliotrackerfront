import { createContext } from 'react';

const UserContext = createContext({
    user: null,
    password: null,
    isLogued: true
});

export default UserContext;