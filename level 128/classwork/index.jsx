import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState(null);

    async function getData(api) {
        const res = await fetch(api);
        const json = await res.json();
        setData(json);
    }

    useEffect(() => {
        getData("https://jsonplaceholder.typicode.com/users");
        console.log(data);
    }, [data]);

    return <div>goa</div>;
    }

export default App;
