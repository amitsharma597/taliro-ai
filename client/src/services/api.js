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
