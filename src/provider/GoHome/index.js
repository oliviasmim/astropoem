import { createContext, useContext } from "react";
import { useHistory } from "react-router";

const GoHomeContext = createContext();

export const GoHomeProvider = ({ children }) => {
    const history = useHistory();

    const handleButtonGoHome = () => {
        return history.push("/home")
    }

    return (
        <GoHomeContext.Provider value={{ handleButtonGoHome }}>
            {children}
        </GoHomeContext.Provider>
    );
};

export const useGoHome = () => useContext(GoHomeContext);
