import { Sparkles, Menu } from "lucide-react";
import ChatInput from "./ChatInput";
import Message from "./Message";

function ChatWindow({ messages, onSendMessage, toggleSidebar }) {
  const suggestions = [
    {
      title: "Write some code",
      description: "Help me build something with JavaScript.",
    },
    {
      title: "Explain a concept",
      description: "Break down a difficult topic simply.",
    },
    {
      title: "Generate ideas",
      description: "Help me brainstorm creative ideas.",
    },
    {
      title: "Improve my writing",
      description: "Make my writing clearer and better.",
    },
  ];

  return (
    <main className="chat-window">
      <header className="chat-header">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            className="icon-button"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu size={19} />
          </button>
          <h3>New Conversation</h3>
        </div>

        <span className="model-badge">AI Assistant</span>
      </header>

      <section className="chat-content">
        {messages.length === 0 ? (
          <div className="welcome-screen">
            <div className="welcome-icon">
              <Sparkles size={27} />
            </div>

            <h1>
              What can I help you <span>with?</span>
            </h1>
            <p>
              Welcome to Taliro. Your space to think, explore,
              <br />
              and turn ideas into reality.
            </p>

            <div className="suggestions">
              {suggestions.map((item) => (
                <button
                  className="suggestion-card"
                  key={item.title}
                  onClick={() =>
                    onSendMessage(item.title + ": " + item.description)
                  }
                >
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="messages">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        )}
      </section>

      <ChatInput onSendMessage={onSendMessage} />
    </main>
  );
}

export default ChatWindow;
