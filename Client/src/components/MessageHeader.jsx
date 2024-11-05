import { useTheme } from '../contexts/ThemeContexts';
// You can import the user context if needed, similar to how the admin context was commented out
// import { useUser } from '../contexts/UserContext';

const MessagesHeader = () => {
  const { isDarkMode } = useTheme();
  // const { user } = useUser(); // Get user data from context
  const userName = /*user?.name ||*/ 'Jane Smith'; // Default user name if not available

  return (
    <header
      className={`p-4 border-b shadow-sm flex justify-between items-center ${
        isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-200'
      }`}
    >
      <div className="flex items-center">
        <h2 className="text-lg font-semibold">Messages</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className={`p-2 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}>
          <span role="img" aria-label="Message" className="text-xl">💬</span>
        </button>
        <button className={`p-2 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}>
          <span role="img" aria-label="Notification" className="text-xl">🔔</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gray-300 h-8 w-8 flex items-center justify-center">
            {userName[0]} {/* Display first letter of user's name */}
          </div>
          <span className="text-sm">{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default MessagesHeader;
