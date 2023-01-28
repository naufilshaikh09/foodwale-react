import { useEffect, useState } from "react";

const useLocalStorage = (localStorageKey, localStorageValue) => {
    if (!localStorageKey) return [null, getSetLocalStorage];
    if (!localStorageKey && !localStorageValue) return [null, getSetLocalStorage];

    const [getLocalStorage, setlocalStorage] = useState(localStorageValue);

    useEffect(() => {
        getSetLocalStorage(localStorageKey, localStorageValue);
    }, []);

    function getSetLocalStorage(key, value) {
        if (key && value) {
            localStorage.setItem(key, value);
            setlocalStorage(localStorage.getItem(key));
        } else {
            setlocalStorage(localStorage.getItem(key));
        }
    }

    return [getLocalStorage, getSetLocalStorage];
}

export default useLocalStorage