import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../context/ThemeContext';

/**
 * DarkModeToggle - Floating dark mode toggle button
 * Positioned in top-right corner, accessible on all pages
 * Designed for classroom datashow/telecommand use
 */
const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="dark-mode-fab"
            title={darkMode ? 'Mode clair' : 'Mode sombre'}
            aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
        >
            <span className="dark-mode-fab-icon">
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </span>
        </button>
    );
};

export default DarkModeToggle;
