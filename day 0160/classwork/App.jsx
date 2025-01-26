// 1) შექმენით რეაქთის აპლიკაცია და გასტილეთ ორი ერთნაირი ღილაკი 2 სხვადასხვა გზით inline და style object ის სახით
// 2) გამოიყენეთ css ფაილი და დააიმპორტეთ როგორც ფაილი

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
  );
};

export default App;
