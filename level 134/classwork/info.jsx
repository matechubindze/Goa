import { useContext } from "react";
import { ThemeContext} from "./themecontext.jsx";

function Info() {
    const {theme, setTheme} = useContext(ThemeContext);

    const styles = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
    }
    return (
        <div style={styles}>
            <h1>Satauri</h1>
            <p>Paragrafi</p>
        <button onClick={() => 
            setTheme(theme === "light" ? "dark" : "light")
        }>
            Change Theme
        </button>
    </div>
    )
}