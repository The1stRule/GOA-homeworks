import { useState } from "react";
import Presentational from "./Presentational.jsx";

const Container = () => {
  const [twoSum, setTwoSum] = useState(0);
  const handleSum = (e) => {
    e.preventDefault();
    const num1 = Number(e.target.num1.value);
    const num2 = Number(e.target.num2.value);
    setTwoSum(num1 + num2);
    e.target.reset();
  };
  return (
    <>
      <p>{twoSum}</p>
      <Presentational handleSum={handleSum} />
    </>
  );
};

export default Container;