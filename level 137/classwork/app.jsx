import { Routes, Route } from "react-router";

function home() {
    return <h1> goa </h1>;
    }

    function App() {
    return (
        <Routes>
        <Route path="/" element={<home />} />
        </Routes>
    );
}

export default App;
