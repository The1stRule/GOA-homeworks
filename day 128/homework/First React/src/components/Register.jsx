const Register = () => {
    const onRegister = () => {
        alert("Registration completed successfully!");
    }

    return (
        <form>
            <h2>Register</h2>
            <input type="text" placeholder="Please enter your name" />
            <br /><br />
            <input type="email" placeholder="Please enter your email" />
            <br /><br />
            <input type="password" placeholder="Please enter your password" />
            <br /><br />
            <button onClick={onRegister} type="button">Submit</button>
        </form>
    );
}

export default Register;