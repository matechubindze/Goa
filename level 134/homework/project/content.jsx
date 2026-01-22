import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeButton from "./ThemeButton";

const Content = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
        <p>The app is using {theme} mode.</p>
        <ThemeButton />
        </div>
    );
    };

export default Content;
