import { useTheme } from '../contexts/ThemeContexts';
// import { useAdmin } from '../contexts/AdminContext'; // Custom hook for admin context

const Header = () => {
  const { isDarkMode } = useTheme();
  // const { admin } = useAdmin();  Get admin data from context

  // Default name if admin's name is not available
  const adminName = /*admin?.name ||*/ 'John Doe';

  return (
    <header
      className={`p-4 border-b shadow-sm flex justify-between items-center ${
        isDarkMode
          ? 'bg-gray-800 text-white border-gray-700'
          : 'bg-white text-black border-gray-200'
      }`}
    >
      <div className='flex items-center gap-2'>
        <div className='rounded-full bg-gray-300 h-10 w-10 flex items-center justify-center'>
          {adminName[0]} {/* Display first letter of admin's name */}
        </div>
        <div>
          <h2 className='text-lg font-semibold'>{adminName}</h2>
          <p className='text-sm text-gray-500'>Welcome to Tara Auct!</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <button
          className={`p-2 rounded-md ${
            isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200'
          }`}
        >
          ☰
        </button>
        <button
          className={`p-2 rounded-md ${
            isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200'
          }`}
        >
          🔔
        </button>
        <input
          type='text'
          placeholder='Search...'
          className={`border rounded-md p-2 ${
            isDarkMode
              ? 'bg-gray-700 text-white border-gray-600'
              : 'bg-white text-black border-gray-300'
          }`}
        />
      </div>
    </header>
  );
};

export default Header;
