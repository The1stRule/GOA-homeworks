import "./index.css";

const App = () => {
  const btnStyles = {
    width: 130,
    height: 35,
    fontSize: 25,
    borderRadius: 10,
    border: "none",
    backgroundColor: "green",
    color: "white",
  };

  return (
    <>
      <div id="forms-div">
        <form>
          <h2>Register</h2>
          <input type="text" name="fullname" placeholder="Enter your fullname" required />
          <input type="email" name="email" placeholder="Enter your email" required />
          <input type="password" name="password" placeholder="Enter your password" required />
          <button>Reigster</button>
        </form>
        <form>
          <h2>Authorization</h2>
          <input type="email" name="email" placeholder="Enter your email" required />
          <input type="password" name="password" placeholder="Enter your password" required />
          <button>Authorization</button>
        </form>
      </div>
      <main>
        <button
          style={{
            width: 130,
            height: 35,
            fontSize: 25,
            borderRadius: 10,
            border: "none",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Red
        </button>
        <button style={btnStyles}>Green</button>
      </main>
    </>
  );
};

export default App;