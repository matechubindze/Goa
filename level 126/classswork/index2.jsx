import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
        <p>{count}</p>
        </div>
    );
}

export default Counter;
