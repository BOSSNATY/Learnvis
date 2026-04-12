import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function run() {
  try {
    console.log("Starting Learnvis API request...");

    const response = await ai.models.generateContent({
      // Switching to the Lite version for better availability
      model: "gemini-3.1-flash-lite-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: "Give me a 1-sentence tagline for my educational site Learnvis.",
            },
          ],
        },
      ],
    });

    console.log("Response:", response.text);
  } catch (error) {
    // 503 Handling: If it still fails, we wait and retry
    if (error.status === 503) {
      console.error("Servers are busy. Retrying in 5 seconds...");
      setTimeout(run, 5000);
    } else {
      console.error("Learnvis Server Error:", error);
    }
  }
}

run();
