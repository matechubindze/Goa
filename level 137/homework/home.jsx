import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
        <h1>Home Page</h1>
        <button onClick={() => navigate("/profile")}>
            Go to Profile
        </button>
        </div>
    );
}

export default Home;
