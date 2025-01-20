const AgeVerification = () => {
    const age = prompt("Please enter your age: ", 0);

    return <h2>You are {age >= 18 ? "Adult" : "Kid"}</h2>;
}

export default AgeVerification;