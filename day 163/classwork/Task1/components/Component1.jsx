import useLightMode from "../hooks/useLightMode.js";

const Component1 = () => {
  const [lightMode, toggle] = useLightMode(false);

  const divStyle = {
    width: 200,
    height: 200,
    backgroundColor: lightMode ? "red" : "black",
  };

  return (
    <div style={divStyle}>
      <button onClick={toggle}>Change Toggle</button>
      <p style={{ color: "white" }}>Component 1</p>
    </div>
  );
};

export default Component1;