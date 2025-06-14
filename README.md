# 🧠 QuillMind

**QuillMind** is an AI-powered writing assistant web application that helps users generate, edit, and manage content intelligently. With features like grammar correction, summarization, paraphrasing, and an intuitive editor, QuillMind empowers creative minds and simplifies the writing workflow.

---

## ✨ Features

- ✅ User Registration and Login (with JWT authentication)
- 📝 AI-powered rich text editor (TipTap)
- ✨ Grammar correction, rewriting, summarization, ELI5, and more
- 📁 My Documents section to save and manage content
- 🔒 Secure backend using Node.js, Express.js, and MongoDB
- 🌐 Responsive and modern UI with React + Tailwind CSS
- 👤 Guest access with limited AI usage

---

## 🚀 Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router
- TipTap Editor
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt.js

### AI Integration
- [Cohere API](https://cohere.com) for natural language processing

---

## ⚙️ Local Development Setup

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas (or local MongoDB instance)
- Cohere API Key (for AI features)

---

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/khuushiie/QuillMind.git
cd QuillMind

# Install frontend dependencies
cd ../frontend
npm install

# Install backend dependencies
cd ../backend
npm install
