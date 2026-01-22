import useCounter from "../hooks/useCounter";

const CounterA = () => {
    const { count, increase } = useCounter();

    return (
        <div>
        <h2>Counter A</h2>
        <p>{count}</p>
        <button onClick={increase}>+</button>
        </div>
    );
};

export default CounterA;

