function StyledComponent() {
    const boxStyle = {
        width: "200px",
        height: "100px",
        backgroundColor: "lightblue",
        marginBottom: "10px"
    };

    const textStyle = {
        color: "darkblue",
        fontSize: "18px"
    };

    const buttonStyle = {
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        border: "none"
    };

    return (
        <div>
        <div style={boxStyle}></div>
        <p style={textStyle}>Hello React</p>
        <button style={buttonStyle}>Click</button>
        </div>
    );
}

export default StyledComponent;
