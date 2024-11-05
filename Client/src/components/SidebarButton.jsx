import PropTypes from 'prop-types';
import { Dashboard, Person, Settings, Message } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContexts';

// SidebarButton Component
const SidebarButton = ({ children, to }) => {
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div
      className={`p-2 flex items-center gap-2 cursor-pointer rounded transition-all duration-300 ${
        isActive
          ? isDarkMode
            ? 'bg-white text-black'
            : 'bg-black text-white'
          : isDarkMode
            ? 'text-gray-400 hover:bg-gray-700 hover:text-white'
            : 'text-gray-700 hover:bg-gray-200'
      }`}
    >
      <Link to={to} className="flex items-center">
        {children}
      </Link>
    </div>
  );
};

// Define prop types for SidebarButton
SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

// Usage in Sidebar
const Sidebar = () => {
  return (
    <div className={`w-64 p-4 flex flex-col justify-between min-h-screen ${useTheme().isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div>
        <div className={`p-4 rounded text-center mb-4 ${useTheme().isDarkMode ? 'bg-gray-700 text-white' : 'bg-black text-white'}`}>
          <h2 className="text-2xl font-bold">LOGO</h2>
        </div>
        <nav className="mt-10">
          <SidebarButton to="/admin-dashboard">
            <Dashboard /> Dashboard
          </SidebarButton>
          <SidebarButton to="/admin-dashboard/user">
            <Person /> User Account
          </SidebarButton>
          <SidebarButton to="/admin-dashboard/admin">
            <Settings /> Admin Account
          </SidebarButton>
          <SidebarButton to="/admin-dashboard/message">
            <Message /> Messages
          </SidebarButton>
          <SidebarButton to="/admin-dashboard/settings">
            <Settings /> Settings
          </SidebarButton>
          {/* Add more sidebar buttons as needed */}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;