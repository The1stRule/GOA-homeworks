import useLightMode from "../hooks/useLightMode.js";

const Component2 = () => {
  const [lightMode, toggle] = useLightMode(false);

  const divStyle = {
    width: 200,
    height: 200,
    backgroundColor: lightMode ? "red" : "black",
  };

  return (
    <div style={divStyle}>
      <button onClick={toggle}>Change Toggle</button>
      <p style={{ color: "white" }}>Component 2</p>
    </div>
  );
};

export default Component2;