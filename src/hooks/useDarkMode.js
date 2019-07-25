import React, { useState, useEffect} from 'react';
import { useLocalStorage } from "./useLocalStorage"

export default function useDarkMode () {
    const [darkMode, setDarkMode] = useLocalStorage('mode')

    useEffect (() => {
        if(darkMode === true) {
            //document.querySelector('body').classList.add('dark-mode')
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    },[darkMode]);

     return [ darkMode, setDarkMode]
}