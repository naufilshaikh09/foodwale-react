import { useEffect, useState } from "react";

const useLocalStorage = (localStorageKey, localStorageValue) => {
    const [getLocalStorage, setlocalStorage] = useState(localStorageValue);

    useEffect(() => {
        getSetLocalStorage(localStorageKey, localStorageValue);
    }, []);

    function getSetLocalStorage(key, value) {
        if (key && value) {
            localStorage.setItem(key, value);
            setlocalStorage(localStorage.getItem(key));
        } else {
            if (!key) return [null, getSetLocalStorage];
            setlocalStorage(localStorage.getItem(key));
        }
    }

    return [getLocalStorage, getSetLocalStorage];
}

export default useLocalStorage