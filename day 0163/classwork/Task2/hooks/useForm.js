import { useState } from "react";

const useForm = (initialState = null) => {
  const [inputInfo, setInputInfo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {};

    for (const [key, value] of new FormData(e.target).entries()) {
      info[key] = value;
    }

    e.target.reset();
    setInputInfo(info);
  };

  return [inputInfo, handleSubmit];
};

export default useForm;