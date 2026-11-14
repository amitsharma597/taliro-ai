import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import { checkServerHealth } from "./services/api";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const connectBackend = async () => {
      try {
        const data = await checkServerHealth();
        console.log(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    connectBackend();
  }, []);

  const handleNewChat = () => {
    setMessages([]);
    setSidebarOpen(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        content: text,
      },
    ]);
  };

  return (
    <div className="app">
      <Sidebar
        isOpen={sidebarOpen}
        onNewChat={handleNewChat}
        onClose={() => setSidebarOpen(false)}
      />

      <ChatWindow
        messages={messages}
        onSendMessage={handleSendMessage}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;
