function Message({ message }) {
  const isUser = message.role === "user";

  return (
    <div className="message">
      <div className="message-avatar">{isUser ? "A" : "T"}</div>

      <div className="message-body">
        <h4>{isUser ? "You" : "Taliro"}</h4>
        <p>{message.content}</p>
      </div>
    </div>
  );
}

export default Message;
