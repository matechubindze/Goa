import React from 'react';

function FallbackUI(props) {
    const cleanProps = Object.assign({}, props);
    delete cleanProps.error;
    delete cleanProps.resetErrorBoundary;

    return (
        <div {...cleanProps}>
        <p>{props.error.message}</p>
        <button onClick={props.resetErrorBoundary}>
            Tavidan 
        </button>
        </div>
    );
}

export default FallbackUI;