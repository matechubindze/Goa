import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./BuggyComponent";

const App = () => {
    const [crash, setCrash] = useState(false);

    return (
        <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCrash(false)}
        >
        <button onClick={() => setCrash(true)}>გამოიწვიე შეცდომა</button>
        <BuggyComponent crash={crash} />
        </ErrorBoundary>
    );
};

export default App;
