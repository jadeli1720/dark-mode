import { useState } from "react";
//Don't need to import React from react. Will not be using it!

//Uncomment so that you can see what is going on in console.

export const useLocalStorage =(key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // console.log(`useLocalStorage:useState`);

        const item = window.localStorage.getItem(key);
        // console.log(`useLocalStorage:useState`, key, initialValue, item);

        //If statement that does the same as the Ternary
        if (item) {
            return JSON.parse(item);
        } else {
            return initialValue;
        }

        //Ternary operator below. It is a expression the returns true or false.     true branch    :  false branch
        // return item ? JSON.parse(item) : initialValue
    });
    const setValue = value => {
        setStoredValue(value);
        // console.log(`useLocalStorage:useState:`, value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue];
    //storedValue = the value or variable you start with
    // setValue= the function used to change storedValue with.
    //This is just like the regular useState that is already set up in this way, we are CUSTOMIZING the function part of the hook.
};