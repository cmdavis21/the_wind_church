'use client';

import { ThemeMode, useThemeMode } from 'flowbite-react';
import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeModeProviderProps {
  children: React.ReactNode;
}

export const ThemeModeContext = createContext({
  darkMode: false,
});

function ThemeModeProvider({ children }: ThemeModeProviderProps) {
  const { computedMode, setMode } = useThemeMode();
  const [initialized, setInitialized] = useState(false);
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized) {
      const storageTheme = localStorage.getItem('flowbite-theme-mode');
      if (!storageTheme) {
        setMode('light');
        localStorage.setItem('flowbite-theme-mode', 'light');
        setTheme('light');
      } else {
        setMode(storageTheme as ThemeMode);
        setTheme(storageTheme as ThemeMode);
      }
      setInitialized(true); // Ensure initialization runs only once
    }
  }, [setMode, initialized]);

  useEffect(() => {
    setTheme(computedMode);
  }, [computedMode]);

  return (
    <ThemeModeContext.Provider value={{ darkMode: theme === 'dark' }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export default ThemeModeProvider;

export const useTheme = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeModeProvider');
  }
  return context;
};
