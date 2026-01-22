import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div>
        <p>დაფიქსირდა შეცდომა</p>
        <button onClick={resetErrorBoundary}>ცადე თავიდან</button>
        </div>
    );
};
