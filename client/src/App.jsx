import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleNewChat = () => {
    setMessages([]);
    setSidebarOpen(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
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
        onSendMessage={(text) => {
          if (!text.trim()) return;

          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              role: "user",
              content: text,
            },
          ]);
        }}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;
