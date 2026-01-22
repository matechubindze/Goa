import { createContext } from "react";

export const MyContext = createContext();

export const MyContextWrapper = ({ children }) => {
    return (
        <MyContext.Provider value={{ text: "Hello from context" }}>
        {children}
        </MyContext.Provider>
    );
};
