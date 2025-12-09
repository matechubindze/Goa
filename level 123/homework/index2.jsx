import { useState } from "react";

function Info() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
        <form>
            <input type="text" value={text} onChange={handleChange} placeholder="Type something..." />
        </form>
        <p>{text}</p>
        </div>
    );
}

export default Info;
