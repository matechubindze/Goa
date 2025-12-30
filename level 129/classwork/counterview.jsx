import { useState } from "react";
import CounterView from "../presentational/CounterView";

function CounterContainer() {
    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(count - 1);
    };

    return <CounterView count={count} decrease={decrease} />;
}

export default CounterContainer;
