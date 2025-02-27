const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

export { getLocalStorage, setLocalStorage };