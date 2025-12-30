function CounterView({ count, decrease }) {
    return (
        <div>
        <p>{count}</p>
        <button onClick={decrease}>Decrease</button>
        </div>
    );
}

export default CounterView;
