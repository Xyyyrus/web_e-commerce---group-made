import SidebarButton from '../../components/SidebarButton';
import Header from '../../components/Header'; // Make sure to import the Header component
import { useTheme } from '../../contexts/ThemeContexts'; // Import useTheme

const User = () => {
  const { isDarkMode } = useTheme(); // Access dark mode state

  // Example user data for the table
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', accountType: 'Buyer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', accountType: 'Seller', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', accountType: 'Verified Seller', status: 'Active' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', accountType: 'Buyer', status: 'Inactive' },
  ];

  return (
    <main className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <SidebarButton />
      <div className={`flex-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <Header /> {/* Header Component */}
        <section className={`flex-1 flex flex-col p-6 overflow-y-auto ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {/* Card Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Buyer Card */}
            <div className={`p-4 shadow rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-semibold text-lg">Buyer</h3>
              <p className="text-2xl font-bold">1,500</p> {/* Example count */}
            </div>

            {/* Registered Seller Card */}
            <div className={`p-4 shadow rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-semibold text-lg">Registered Seller</h3>
              <p className="text-2xl font-bold">300</p> {/* Example count */}
            </div>

            {/* Verified Seller Card */}
            <div className={`p-4 shadow rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-semibold text-lg">Verified Seller</h3>
              <p className="text-2xl font-bold">150</p> {/* Example count */}
            </div>
          </div>

          {/* User Management Section */}
          <div className={`mt-6 p-4 shadow rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`font-semibold text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>User Management</h2>
            <table className="w-full mt-2">
              <thead>
                <tr className={`text-left border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <th className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Name</th>
                  <th className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email</th>
                  <th className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Account Type</th>
                  <th className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Status</th>
                  <th className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                    <td className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{user.name}</td>
                    <td className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{user.email}</td>
                    <td className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{user.accountType}</td>
                    <td className={`py-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{user.status}</td>
                    <td className="py-2">
                      <input type="checkbox" className="mr-2" />
                      <span className={`cursor-pointer ${isDarkMode ? 'text-green-400' : 'text-green-500'}`}>✓</span>
                      <span className={`cursor-pointer ml-2 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`}>✗</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default User;
