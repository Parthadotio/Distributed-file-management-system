import {
    createContext,
    useEffect,
    useState,
} from "react";

import {
    getAccessToken,
    setAccessToken,
    clearAccessToken,
} from "../config/storeToken";

import {
    loginUser,
    registerUser,
    logoutUser,
    refreshAccessToken,
} from "../auth/user.auth.jsx";

const UserContext = createContext(null);

const USER_STORAGE_KEY = "dfms_user";

export function UserProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser =
            localStorage.getItem(USER_STORAGE_KEY);

        return storedUser
            ? JSON.parse(storedUser)
            : null;
    });

    const [isAuthenticated, setIsAuthenticated] =
        useState(Boolean(getAccessToken()));

    useEffect(() => {
        if (user) {
            localStorage.setItem(
                USER_STORAGE_KEY,
                JSON.stringify(user)
            );
        } else {
            localStorage.removeItem(USER_STORAGE_KEY);
        }
    }, [user]);

    const signIn = async (payload) => {
        const data = await loginUser(payload);

        setUser(data.user);
        setIsAuthenticated(true);

        return data;
    };

    const signUp = async (payload) => {
        return registerUser(payload);
    };

    const signOut = async () => {
        await logoutUser();

        setUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        user,
        setUser,

        isAuthenticated,

        setAccessToken,
        clearAccessToken,

        signIn,
        signUp,
        signOut,

        refreshAccessToken,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;