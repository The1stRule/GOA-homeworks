import { Link } from "react-router-dom";
import { authorization } from "../utils/handlerFunctions.js";
import { useError } from "../hooks/useError.js";

const Authorization = ({ setCurUserForm }) => {
    const [isError, handleError] = useError();

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurUserForm(e.target, authorization, handleError);
    }

    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <button>Authorize</button>
                <p>Don't have an account? <Link to="/register">Register</Link> </p>
            </form>
            <p>{isError ? "User not found!" : ""}</p>
        </div>
    );
}

export default Authorization;