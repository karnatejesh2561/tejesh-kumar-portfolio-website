// context/ThemeContext.tsx
"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);