import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

/**
 * ThemeProvider - Global dark mode state management
 * Persists preference to localStorage for classroom use
 */
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved === 'true';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * Hook to access dark mode state and toggle function
 */
export const useDarkMode = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeContext;
