import { useState } from "react";
import { ArrowUp, LoaderCircle } from "lucide-react";

function ChatInput({ onSendMessage, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim() || loading) return;

    onSendMessage(input);
    setInput("");
  };

  return (
    <div className="input-area">
      <form className="chat-form" onSubmit={handleSubmit}>
        <textarea
          placeholder={loading ? "Taliro is thinking..." : "Message Taliro..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          rows={1}
          disabled={loading}
        />

        <button
          type="submit"
          className="send-button"
          disabled={!input.trim() || loading}
          aria-label="Send message"
        >
          {loading ? (
            <LoaderCircle size={19} className="spin" />
          ) : (
            <ArrowUp size={19} />
          )}
        </button>
      </form>

      <p className="disclaimer">
        Taliro AI can make mistakes. Check important information.
      </p>
    </div>
  );
}

export default ChatInput;
