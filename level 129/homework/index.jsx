const StyledBlock = () => {
    return (
        <div style={{ padding: "20px", backgroundColor: "#f2f2f2" }}>
        <h1 style={{ color: "darkblue", fontSize: "32px" }}>Title</h1>

        <p style={{ color: "gray", fontSize: "16px" }}>
            This is a paragraph
        </p>

        <button
            style={{
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            }}
        >
            Click me
        </button>

        <ul style={{ marginTop: "15px", color: "green" }}>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ul>
        </div>
    );
};

export default StyledBlock;
