import { getLocalSotrage, setLocalSotrage } from "./localStorage.js"

const register = (target, formData, setData, navigate) => {
    for(const user of getLocalSotrage("users")) {
        if(user.email === formData.email) {
            return;
        }
    }

    target.reset();
    setData(prev => {
        setLocalSotrage("users", [...prev, formData]);
        return [...prev, formData];
    });
    navigate("/authorization");
}

const authorization = (target, formData, setData, navigate) => {
    for(const user of getLocalSotrage("users")) {
        if(user.email === formData.email && user.password === formData.password) {
            target.reset();
            setLocalSotrage("curUser", user);
            setData(user);
            navigate("/");
        }
    }
}

export { register, authorization };