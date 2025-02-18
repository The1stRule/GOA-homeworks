import { useState } from "react";

const useLightMode = (initialState = false) => {
  const [lightMode, setLightMode] = useState(initialState);

  const toggle = () => {
    setLightMode((prev) => !prev);
  };

  return [lightMode, toggle];
};

export default useLightMode;