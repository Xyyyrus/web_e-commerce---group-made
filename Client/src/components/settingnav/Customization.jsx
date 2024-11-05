import { useTheme } from '../../contexts/ThemeContexts'; 

const Customization = () => {
  const { isDarkMode, toggleTheme } = useTheme(); 
  
  return (
    <div className={`flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`} style={{ height: '100vh' }}>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Single Card Wrapper */}
        <div className={`shadow rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-lg font-bold mb-4">Customization Options</h2>
          
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between mb-4">
            <span className="mr-2">Dark Mode</span>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
              className={`form-checkbox h-5 w-5 ${isDarkMode ? 'text-blue-500' : 'text-gray-600'}`}
            />
          </div>

          {/* Additional customization options */}

        </div>
      </div>
    </div>
  );
};

export default Customization;
