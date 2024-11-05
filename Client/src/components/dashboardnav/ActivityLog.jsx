import { useTheme } from '../../contexts/ThemeContexts';

const AdminActivityLog = () => {
  const { isDarkMode } = useTheme();

  const activityLog = [
    {
      name: 'Myrna Viena',
      action: 'Verified Seller',
      user: 'ikkiville',
      date: '10/13/2024',
      time: '11:34 AM'
    },
    {
      name: 'Myrna Viena',
      action: 'Logged In',
      user: 'Myrna Viena',
      date: '10/13/2024',
      time: '11:03 AM'
    },
    {
      name: 'Justin Bala',
      action: 'Rejected Seller tay',
      user: 'ray',
      date: '10/13/2024',
      time: '10:23 AM'
    },
    {
      name: 'Aileen Patino',
      action: 'Removed Admin',
      user: 'joseph',
      date: '10/12/2024',
      time: '5:12 PM'
    },
    {
      name: 'Sharlene Chanigan',
      action: 'Replied Buyer',
      user: 'henry',
      date: '10/12/2024',
      time: '4:11 PM'
    },
    {
      name: 'Karl Dela Cruz',
      action: 'Replied Buyer',
      user: 'mariles',
      date: '10/12/2024',
      time: '4:10 PM'
    }
  ];

  return (
    <div className={`flex flex-col p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className={`mt-6 p-4 rounded shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>Admin Activity Log</h3>
        <table className="w-full mt-2">
          <thead>
            <tr className={`text-left border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <th className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>NAME</th>
              <th className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>ACTION</th>
              <th className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>USER</th>
              <th className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>DATE</th>
              <th className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>TIME</th>
            </tr>
          </thead>
          <tbody>
            {activityLog.map((activity, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-300'
                }`}
              >
                <td className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{activity.name}</td>
                <td className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{activity.action}</td>
                <td className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{activity.user}</td>
                <td className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{activity.date}</td>
                <td className={`px-2 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{activity.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminActivityLog;