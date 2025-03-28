import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = ({ users, setUsers }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        for(const user of users) {
            if(user.email === email) {
                alert("Email is already exist")
                return;
            }
        }
    
        target.reset();
        setUsers(prev => [...prev, { username, email, password }]);
        navigate("/authorization");
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter your username" required />
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <button>Register</button>
                <p>Already have account? <Link to="/authorization">Authorization</Link></p>
            </form>
        </div>
    );
}

export default Register;