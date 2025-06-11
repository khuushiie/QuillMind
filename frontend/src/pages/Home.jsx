import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-wrapper bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="text-center px-4 py-20 md:py-28">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-6 leading-tight">
          Discover <span className="text-indigo-500">QuillMind</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto mb-8">
          AI tools that simplify your writing, generate ideas, and elevate your creativity.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/editor"
            className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 transform hover:scale-105 transition"
          >
            Try the Editor
          </Link>
          <Link
            to="/register"
            className="px-8 py-3 rounded-full text-indigo-500 bg-white shadow hover:text-indigo-600 transform hover:scale-105 transition"
          >
            Create Account
          </Link>
        </div>
      </section>

      {/* Features Preview */}
      <section className="w-full py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Tools You’ll Love
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/70 backdrop-blur p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
            >
              <div className="text-5xl mb-4 text-indigo-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {feature.description}
              </p>
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
    title: "Fix Grammar",
    description: "Instantly correct spelling, punctuation, and grammatical issues."
  },
  {
    icon: "\uD83D\uDD04",
    title: "Rewrite Smarter",
    description: "Easily rephrase text to sound formal, simple, or more creative."
  },
  {
    icon: "\uD83D\uDCDD",
    title: "Generate Ideas",
    description: "Use AI to generate blog titles, outlines, and story hooks."
  },
  {
    icon: "\uD83D\uDCC8",
    title: "Summarize Content",
    description: "Turn lengthy text into concise summaries or bullet points."
  },
  {
    icon: "\uD83D\uDCAC",
    title: "Adjust Tone",
    description: "Make your writing friendly, persuasive, or academic."
  },
  {
    icon: "\uD83C\uDF1F",
    title: "Explain Simply",
    description: "Break down complex information with our ELI5 feature."
  }
];



