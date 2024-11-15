'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

const springTransition = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex items-center gap-2 p-2 rounded-full transition-all duration-300 
                ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}`}
            layout
            transition={springTransition}
        >
            <motion.div layout transition={springTransition} className="flex items-center justify-center">
                {theme === 'light' ? (
                    <Moon className="text-purple-600" />
                ) : (
                    <Sun className="text-purple-300" />
                )}
            </motion.div>
            <span className={`text-sm font-medium transition-colors duration-300 
                ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>
                {theme === 'light' ? 'Dark' : 'Light'}
            </span>
        </motion.button>
    );
};

export default ThemeToggleButton;
