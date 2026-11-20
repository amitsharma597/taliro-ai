const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const checkServerHealth = async () => {
  try {
    const response = await fetch(`${API_URL}/api/health`);

    if (!response.ok) {
      throw new Error("Backend connection failed");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

export const sendChatMessage = async (message) => {
  try {
    const response = await fetch(`${API_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to get AI response");
    }

    return data.reply;
  } catch (error) {
    console.error("Chat API Error:", error.message);
    throw error;
  }
};
