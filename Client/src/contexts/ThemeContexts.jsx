import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// PropTypes validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Specify that 'children' is a required prop of type node
};
