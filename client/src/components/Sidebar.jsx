import { Plus, PanelLeftClose, MessageSquare, Settings } from "lucide-react";

function Sidebar({ isOpen, onNewChat }) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">
          Taliro<span>.</span>
        </h2>
        <button className="icon-button" aria-label="Close sidebar">
          <PanelLeftClose size={18} />
        </button>
      </div>

      <button className="new-chat-button" onClick={onNewChat}>
        <Plus size={17} />
        New Chat
      </button>

      <p className="sidebar-label">Recent Chats</p>

      <div className="history-item">
        <MessageSquare
          size={14}
          style={{ display: "inline", marginRight: "9px" }}
        />
        Welcome to Taliro
      </div>

      <div className="sidebar-footer">
        <div className="profile">
          <div className="profile-avatar">A</div>
          <div className="profile-info">
            <h4>Amit Sharma</h4>
            <p>Free Plan</p>
          </div>
          <Settings size={17} color="#71717a" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
