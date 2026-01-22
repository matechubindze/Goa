import useInfo from "./hooks/useInfo";

function App() {
    const { count, increase, decrease, reset } = useInfo();

    return (
        <div>
        <p>{count}</p>

        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;
