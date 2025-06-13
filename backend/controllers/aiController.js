// controllers/aiController.js
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.CO_API_KEY,
});

export const cohereAIController = async (req, res) => {
  const { feature, text } = req.body;

  if (!feature || !text) {
    return res.status(400).json({ error: "Feature and text are required." });
  }

  const prompt = generatePrompt(feature, text);

  try {
    const response = await cohere.generate({
      model: "command",
      prompt,
      maxTokens: 300,
      temperature: 0.7,
    });

    const result = response.generations[0].text.trim();

    res.status(200).json({ result });
  } catch (err) {
    console.error("Cohere Error:", err);
    res.status(500).json({ error: "AI request failed." });
  }
};

const generatePrompt = (feature, text) => {
  switch (feature) {
    case "Fix Grammar":
      return `Fix grammar and spelling in this:\n\n${text}`;
    case "Summarize":
      return `Summarize this:\n\n${text}`;
    case "Rewrite":
      return `Rewrite this clearly:\n\n${text}`;
    case "Paraphrase":
      return `Paraphrase this:\n\n${text}`;
    case "ELI5":
      return `Explain like I'm five:\n\n${text}`;
    case "Continue Writing":
      return `Continue writing:\n\n${text}`;
    default:
      return `Help with:\n\n${text}`;
  }
};