import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <Helmet>
  <title>The Only Docker Blog You Need | TechWithYash</title>
  <meta name="description" content="Learn Docker from scratch with examples and projects." />
  <meta property="og:image" content="https://www.techwithyash.com/og-image.png" />
</Helmet>

    <div className="max-w-3xl mx-auto px-4 py-12 text-white">
    
      <h1 className="text-3xl font-bold mb-6">📝 Blogs</h1>
      <div className="space-y-4">
        <Link to="/blog/Docker" className="block p-4 bg-[#142d5c] rounded-lg hover:bg-[#1f3d7a] transition">
          <h2 className="text-xl font-semibold">🐳 Docker Isn’t That Deep</h2>
          <p className="text-gray-300">Understand Docker in the simplest way possible and run your first container today.</p>
        </Link>
        {/* Add more blogs below later */}
      </div>
    </div>
    </div>
  );
}
