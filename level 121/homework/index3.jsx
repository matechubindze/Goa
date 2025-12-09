import Hello from "./Hello";
import HelloButton from "./HelloButton";

function App() {
    function someFunction() {
        alert("Button clicked!");
    }

    return (
        <>
        <Hello name="Alice" />
        <HelloButton onClick={someFunction} />
        </>
    );
}

export default App;
