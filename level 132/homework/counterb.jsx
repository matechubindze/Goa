import useCounter from "../hooks/useCounter";

const CounterB = () => {
    const { count, decrease } = useCounter();

    return (
        <div>
        <h2>Counter B</h2>
        <p>{count}</p>
        <button onClick={decrease}>-</button>
        </div>
    );
};

export default CounterB;

