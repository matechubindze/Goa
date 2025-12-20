import { useEffect } from "react";

function MyComponent() {
    const getData = async (api) => {
        const res = await fetch(api);
        const data = await res.json();
        console.log(data);
    };

    useEffect(() => {
        getData("https://api.github.com/users/facebook/repos");
    }, []);

    return (
        <div>
        <h1>GitHub API</h1>
        </div>
    );
}

export default MyComponent;
