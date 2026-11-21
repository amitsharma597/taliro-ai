import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import { checkServerHealth, sendChatMessage } from "./services/api";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);

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

  const handleSendMessage = async (text) => {
    if (!text.trim() || loading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const reply = await sendChatMessage(text);

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
      console.error("Failed to send message:", error.message);
    } finally {
      setLoading(false);
    }
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
        loading={loading}
      />
    </div>
  );
}

export default App;
