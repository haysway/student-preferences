import { useEffect, useState } from "react";

const useLocalStorage = (key, initValue) => {
    // set state to localStorage if exists
    // else use 'value'
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(key);
        return savedValue || initValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);
};

export default useLocalStorage;