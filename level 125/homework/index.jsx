import { useState, useEffect } from "react";

function AsyncData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
        const result = await new Promise((resolve) =>
            setTimeout(() => resolve("Hello from async function!"), 2000)
        );
        setData(result);
        }

        fetchData();
    }, []);

    return (
        <div>
        <h2>Async Data Component</h2>
        <p>{data ? data : "Loading..."}</p>
        </div>
    );
}

export default AsyncData;
