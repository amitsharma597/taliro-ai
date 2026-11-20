const express = require("express");
const router = express.Router();

const getGemini = require("../config/gemini");

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const ai = await getGemini();

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-3.8-flash",
      contents: message,
    });

    res.json({
      success: true,
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini API Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to generate AI response",
    });
  }
});

module.exports = router;
