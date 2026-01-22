import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false }

    constructor(props) {
        super(props)
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        return hasError ? <p>error</p> : children;
    }
}

export default ErrorBoundary;