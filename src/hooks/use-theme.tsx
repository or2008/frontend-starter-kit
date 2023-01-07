import { useEffect } from 'react';

import { useStore } from '@/model/store';

/**
 * a custom hook to switch between light mode and dark mode
 * @default "dark"
 * @returns
 */
const useTheme = () => {
    const { theme, setTheme } = useStore();
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return {
        theme,
        toggleTheme
    };
};

export default useTheme;
