import { useState, useEffect } from "react";

function CounterComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleKeyDown = () => {
        setCount(prev => prev + 1);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
        document.removeEventListener("keydown", handleKeyDown);
    };
    }, []);

    return (
    <div>
        <p>Count: {count}</p>
    </div>
    );
}

export default CounterComponent;