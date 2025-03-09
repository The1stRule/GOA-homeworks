import { Link } from "react-router-dom";
import { authorization } from "../utils/handlerFunctions.js";
import { useError } from "../hooks/useError.js";

const Authorization = ({ setCurUserForm }) => {
    const [isError, handleError] = useError();

    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={(e) => setCurUserForm(e, authorization, handleError)}>
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