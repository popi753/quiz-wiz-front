import { createContext, useState, type ReactNode } from 'react';

export type UserContextType = {
    user: { username: string, email: string },
    handleSetUser: (user: { username: string, email: string }) => void,
}

export const UserContext = createContext<UserContextType>({
    user: { username: '', email: '' },
    handleSetUser: () => { }
});

export default function UserContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<{ username: string, email: string }>({ username: '', email: '' });

    const handleSetUser = (user: { username: string, email: string }) => {
        setUser(user);
    }

    const contextValue: UserContextType = { user, handleSetUser };
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
};
