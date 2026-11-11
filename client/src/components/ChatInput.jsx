import { useState } from "react";
import { ArrowUp } from "lucide-react";

function ChatInput({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    onSendMessage(input);
    setInput("");
  };

  return (
    <div className="input-area">
      <form className="chat-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Message Taliro..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          rows={1}
        />

        <button
          type="submit"
          className="send-button"
          disabled={!input.trim()}
          aria-label="Send message"
        >
          <ArrowUp size={19} />
        </button>
      </form>

      <p className="disclaimer">
        Taliro AI can make mistakes. Check important information.
      </p>
    </div>
  );
}

export default ChatInput;
