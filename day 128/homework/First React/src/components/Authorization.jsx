const Authorization = () => {
    const onAuthoriz = () => {
        alert("Authorization completed successfully!");
    }

    return (
        <form>
            <h2>Authorization</h2>
            <input type="email" placeholder="Please enter your email" />
            <br /><br />
            <input type="password" placeholder="Please enter your password" />
            <br /><br />
            <button onClick={onAuthoriz} type="button">Submit</button>
        </form>
    );
}

export default Authorization;