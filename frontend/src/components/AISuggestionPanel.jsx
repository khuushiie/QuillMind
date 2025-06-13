import { useState } from 'react';
import api from '../lib/api';

function AISuggestionPanel({ content }) {
  const [suggestions, setSuggestions] = useState({});
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState('formal');

  const handleAIRequest = async (type) => {
    setLoading(true);
    try {
      const response = await api.post(`/ai/${type}`, { text: content, tone });
      setSuggestions({ ...suggestions, [type]: response.data });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-indigo-600">AI Tools</h3>
      <div className="space-y-2">
        <button
          onClick={() => handleAIRequest('grammar')}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          disabled={loading}
        >
          Fix Grammar
        </button>
        <div>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
            <option value="creative">Creative</option>
          </select>
          <button
            onClick={() => handleAIRequest('tone')}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 mt-2"
            disabled={loading}
          >
            Adjust Tone
          </button>
        </div>
        <button
          onClick={() => handleAIRequest('summarize')}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          disabled={loading}
        >
          Summarize
        </button>
        <button
          onClick={() => handleAIRequest('generate')}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          disabled={loading}
        >
          Continue Writing
        </button>
        <button
          onClick={() => handleAIRequest('paraphrase')}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          disabled={loading}
        >
          Paraphrase
        </button>
        <button
          onClick={() => handleAIRequest('simplify')}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          disabled={loading}
        >
          Simplify (ELI5)
        </button>
        <button
          onClick={() => handleAIRequest('ideas')}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          disabled={loading}
        >
          Generate Ideas
        </button>
      </div>
      {Object.keys(suggestions).length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Suggestions</h4>
          {suggestions.grammar && <p>{suggestions.grammar.correctedText}</p>}
          {suggestions.tone && <p>{suggestions.tone.improvedText}</p>}
          {suggestions.summarize && <p>{suggestions.summarize.summary}</p>}
          {suggestions.generate && <p>{suggestions.generate.generatedText}</p>}
          {suggestions.paraphrase && <p>{suggestions.paraphrase.paraphrasedText}</p>}
          {suggestions.simplify && <p>{suggestions.simplify.simplifiedText}</p>}
          {suggestions.ideas && (
            <ul className="list-disc pl-4">
              {suggestions.ideas.ideas.map((idea, index) => (
                <li key={index}>{idea}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
export default AISuggestionPanel;