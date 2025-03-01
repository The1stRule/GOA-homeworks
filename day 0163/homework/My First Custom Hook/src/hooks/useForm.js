import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage.js";

const useForm = (initialState, value) => {
    const [data, setData] = useState(getLocalStorage(initialState) || value);
    const navigate = useNavigate();

    !getLocalStorage(data) && setLocalStorage(initialState, data);

    const handleSubmit = (target, func, handleError) => {
        const formData = {};
        for(const [key, value] of new FormData(target).entries()) {
            formData[key] = value;
        }

        func(target, formData, setData, navigate, handleError);
    }

    return [data, setData, handleSubmit];
}

export { useForm };