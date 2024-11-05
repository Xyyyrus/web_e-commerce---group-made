import MessagesHeader from '../../components/MessageHeader'; // Import the MessagesHeader
import SidebarButton from '../../components/SidebarButton'; // Import SidebarButton
import { useTheme } from '../../contexts/ThemeContexts'; // Ensure the path is correct
import { useState } from 'react'; // Import useState for managing selected chat

const Messages = () => {
  const { isDarkMode } = useTheme(); // Access the dark mode state

  // Example data for chat participants
  const chatParticipants = [
    { id: 1, name: 'John Doe', lastMessage: 'See you later!', time: '2:30 PM' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Thanks for the update!', time: '1:45 PM' },
    { id: 3, name: 'Alice Johnson', lastMessage: 'Let’s catch up!', time: '12:15 PM' },
    // Add more participants as needed
  ];

  // Example data for conversations
  const conversations = {
    1: {
      name: 'John Doe',
      messages: [
        { id: 1, sender: 'you', content: 'Hello, John!', time: '2:00 PM' },
        { id: 2, sender: 'John', content: 'Hi! How are you?', time: '2:01 PM' },
        { id: 3, sender: 'you', content: 'I’m good, thanks!', time: '2:02 PM' },
      ],
    },
    2: {
      name: 'Jane Smith',
      messages: [
        { id: 1, sender: 'you', content: 'Hello!', time: '1:40 PM' },
        { id: 2, sender: 'Jane', content: 'Hi! How are you?', time: '1:41 PM' },
      ],
    },
    3: {
      name: 'Alice Johnson',
      messages: [
        { id: 1, sender: 'you', content: 'Let’s catch up!', time: '12:00 PM' },
        { id: 2, sender: 'Alice', content: 'Sure! When?', time: '12:01 PM' },
      ],
    },
    // Add more conversations as needed
  };

  // State for selected conversation
  const [selectedConversationId, setSelectedConversationId] = useState(1); // Default to the first conversation

  // Get the selected conversation data
  const selectedConversation = conversations[selectedConversationId];

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <SidebarButton />
      <div className={`flex-1 flex flex-col ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <MessagesHeader />
        <section className="p-6 flex-1">
          <div className={`bg-gray-800 rounded-lg shadow p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="font-semibold text-lg mb-4">Chat with {selectedConversation.name}</h2>
            <div className="flex gap-4 mb-4">
              {/* Left Column for Chat Participants */}
              <div className={`w-1/3 overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {chatParticipants.map(participant => (
                  <div 
                    key={participant.id} 
                    className={`flex items-center justify-start border-b py-2 cursor-pointer ${selectedConversationId === participant.id ? 'bg-gray-700' : ''}`}
                    onClick={() => setSelectedConversationId(participant.id)} // Update selected conversation on click
                  >
                    <img src={`https://via.placeholder.com/40`} alt={participant.name} className="rounded-full mr-2 w-10 h-10" />
                    <div className="flex flex-col">
                      <span>{participant.name}</span>
                      <span className="text-gray-500 text-sm">{participant.lastMessage}</span>
                    </div>
                    <span className="text-gray-500 text-sm ml-auto">{participant.time}</span>
                  </div>
                ))}
              </div>

              {/* Right Column for Conversation */}
              <div className={`w-2/3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg p-4`}>
                <div className="h-80 overflow-y-scroll">
                  {selectedConversation.messages.map(message => (
                    <div key={message.id} className={`py-2 ${message.sender === 'you' ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-block rounded-lg p-2 ${message.sender === 'you' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                        {message.content}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">{message.time}</span>
                    </div>
                  ))}
                </div>
                {/* Input box for new messages */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className={`border rounded-md p-2 w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Messages;
