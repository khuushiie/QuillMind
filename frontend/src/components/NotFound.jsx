function NotFound() {
  return (
    <div className="py-8 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-indigo-700">Back to Home</Link>
    </div>
  );
}

export default NotFound;