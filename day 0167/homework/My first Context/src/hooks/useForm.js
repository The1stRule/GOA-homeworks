const useForm = () => {
    const handleSubmit = (e, func, setData, navigate) => {
        e.preventDefault();
        const formData = {};

        for(const [key, value] of new FormData(e.target).entries()) {
            formData[key] = value;
        }

        func(e.target, formData, setData, navigate);
    }

    return handleSubmit;
}

export { useForm };