import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-indigo-700 mb-10">
          Welcome back to <span className="text-purple-600">QuillMind</span> ✨
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '✍ Start Writing',
              desc: 'Open the AI-powered editor and bring your ideas to life.',
              path: '/editor',
            },
            {
              title: '👤 My Profile',
              desc: 'Customize your settings and review your writing stats.',
              path: '/profile',
            },
            {
              title: '🏠 Home',
              desc: 'Return to homepage and explore QuillMind’s features.',
              path: '/',
            },
            {
              title: '📝 My Documents',
              desc: 'View and manage your saved writings and drafts.',
              path: '/history',
            },
            {
              title: '📊 Analytics',
              desc: 'Track your writing performance and progress over time.',
              path: '/analytics',
            },
            {
              title: '💬 Feedback',
              desc: 'Give feedback or request new features.',
              path: '/feedback',
            },
          ].map((card, index) => (
            <Link
              to={card.path}
              key={index}
              className="bg-white/70 backdrop-blur p-6 rounded-2xl shadow-md border border-indigo-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

