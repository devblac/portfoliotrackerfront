import { createContext } from 'react';

const UserContext = createContext({
    user: null,
    password: null,
    isLogued: false
});

export default UserContext;