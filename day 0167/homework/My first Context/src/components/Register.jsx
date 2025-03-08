import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.jsx";
import { register } from "../utils/handlerFunctions.js";

const Register = () => {
    const { setUsers, handleSubmit, navigate } = useContext(AuthContext);

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e, register, setUsers, navigate)}>
                <input type="text" name="username" placeholder="Enter your username" required />
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <button>Register</button>
                <p>Already have account? <Link to="/authorization">Authorization</Link></p>
            </form>
            {/* error message იქნება */}
            <p></p>
        </div>
    );
}

export default Register;