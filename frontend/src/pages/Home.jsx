import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-wrapper bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-indigo-500">QuillMind</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-8">
          Your AI-powered writing assistant designed to enhance creativity, productivity, and clarity.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/editor"
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 transition-transform transform hover:scale-105"
          >
            Start Writing
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 rounded-full text-indigo-500 bg-white shadow hover:text-indigo-600 transition-transform transform hover:scale-105"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What QuillMind Offers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/70 backdrop-blur p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4 text-indigo-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "\u270E\uFE0F",
    title: "Grammar Correction",
    description: "Fix spelling, punctuation, and grammar mistakes instantly."
  },
  {
    icon: "\uD83D\uDD04",
    title: "Text Rewriting",
    description: "Rephrase sentences with different tones and styles."
  },
  {
    icon: "\uD83D\uDCDD",
    title: "Content Generation",
    description: "Get help generating content based on your inputs."
  },
  {
    icon: "\uD83D\uDCC8",
    title: "Summarization",
    description: "Summarize long content into digestible formats."
  },
  {
    icon: "\uD83D\uDCAC",
    title: "Tone Adjustment",
    description: "Easily change the tone to match your audience."
  },
  {
    icon: "\uD83C\uDF1F",
    title: "Idea Generator",
    description: "Get creative ideas for blogs, scripts, essays and more."
  }
];


