import { useEffect, useState } from "react";

const useLocalStorage = (key, initValue) => {
    // set state to localStorage if exists
    // else use 'value'
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(key);
        return savedValue !== null ? JSON.parse(savedValue) : initValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;