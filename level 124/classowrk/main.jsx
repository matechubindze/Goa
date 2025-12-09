import { useState } from "react";

export default function Colors() {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
        "black",
        "white"
    ];

    const [index, setIndex] = useState(0);

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setIndex(randomIndex);
    };

    return (
        <div>
        <p>Selected color: {colors[index]}</p>
        <button onClick={handleClick}>Show Random Color</button>
        </div>
    );
}

function goa() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    );
}

export default goa;
