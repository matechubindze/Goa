import React, { useState, useEffect } from 'react';

export default function ClickCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleClick = () => setCount(prev => prev + 1);
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    });

    return <div>Document clicks: {count}</div>;
}
