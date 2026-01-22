import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const { theme } = useContext(ThemeContext);

    return <h1>Current Theme: {theme}</h1>;
};

export default Header;
