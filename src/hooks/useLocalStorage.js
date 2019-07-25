import { useState } from "react";

export default function useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        console.log(`useLocalStorage:useState`);

        const item = window.localStorage.getItem(key);
        console.log(`useLocalStorage:useState`, key, initialValue, item);

        return item ? JSON.parse(item) : initialValue
    });

    return [storedValue];
};