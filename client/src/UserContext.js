import React, {useState} from 'react';

const UserContext = React.createContext({});

const UserProvider = ({children}) => {
    const [mail, setMail] = useState('');
    const [type, setType] = useState('');

    return (
        <UserContext.Provider
            value={{
                mail,
                type, 
                setMail,
                setType 
            }}>
                {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };