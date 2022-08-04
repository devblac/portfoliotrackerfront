import { createContext } from 'react';

const UserContext = createContext({
    user: null,
    password: null
});

export default UserContext;