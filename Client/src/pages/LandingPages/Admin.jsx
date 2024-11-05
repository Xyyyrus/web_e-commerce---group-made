import SidebarButton from '../../components/SidebarButton'; // Ensure the correct import path
import Header from '../../components/Header'; // Ensure this path is correct
import { useTheme } from '../../contexts/ThemeContexts'; // Import useTheme
import { useEffect, useState } from 'react';
import api from '@/api/api';
import { toast } from '@/hooks/use-toast';

const Admin = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await api.get('/users/');
        setAdmins(response.data);
      } catch (error) {
        if (error.response) {
          toast.error(error.response.message);
        } else {
          toast.error(`Error: ${error.message}`);
        }
      }
    };

    fetchAdmins();
  }, []);

  const { isDarkMode } = useTheme(); // Access dark mode state

  return (
    <div
      className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <SidebarButton /> {/* Sidebar on the left */}
      <div className={`flex-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <Header />
        <section className='p-6 flex-1'>
          {/* Admin Account Manager Card */}
          <div
            className={`p-4 shadow rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className='font-semibold text-xl mb-4'>
              Admin Account Dashboard
            </h2>
            <table className='w-full mt-2'>
              <thead>
                <tr
                  className={`text-left border-b ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-300'
                  }`}
                >
                  <th
                    className={`py-2 ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Name
                  </th>
                  <th
                    className={`py-2 ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Email
                  </th>
                  <th
                    className={`py-2 ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Account Type
                  </th>
                  <th
                    className={`py-2 ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Status
                  </th>
                  <th
                    className={`py-2 ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr
                    key={admin._id}
                    className={`border-b ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-300'
                    }`}
                  >
                    <td
                      className={`py-2 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      {admin.username}
                    </td>
                    <td
                      className={`py-2 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      {admin.email}
                    </td>
                    <td
                      className={`py-2 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      {admin.accountType}
                    </td>
                    <td
                      className={`py-2 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      {admin.status}
                    </td>
                    <td className='py-2'>
                      <button
                        className={`text-blue-500 hover:underline ${
                          isDarkMode
                            ? 'hover:text-blue-400'
                            : 'hover:text-blue-600'
                        }`}
                      >
                        Edit
                      </button>
                      <button
                        className={`text-red-500 hover:underline ml-2 ${
                          isDarkMode
                            ? 'hover:text-red-400'
                            : 'hover:text-red-600'
                        }`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
