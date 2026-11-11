import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleNewChat = () => {
    setMessages([]);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", content: text },
    ]);
  };

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} onNewChat={handleNewChat} />

      <ChatWindow
        messages={messages}
        onSendMessage={handleSendMessage}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
    </div>
  );
}

export default App;
