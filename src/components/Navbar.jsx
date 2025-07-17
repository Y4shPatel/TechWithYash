import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0a1f44] text-white shadow-md">
      {/* Left: Site Title */}
      <div className="text-2xl font-bold tracking-wide">
        Yash Patel
      </div>

      {/* Right: Nav Links */}
      <div className="flex gap-3 flex-wrap">
        {[
          { label: "Intro", to: "/#intro" },
          { label: "Projects", to: "/#projects" },
          { label: "About", to: "/#about" },
          { label: "Contact", to: "/#contact" },
          { label: "Home", to: "/" },
          { label: "Blogs", to: "/blog" },
        ].map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className="px-4 py-2 rounded-full bg-[#142d5c] hover:bg-[#1f3d7a] transition duration-200 text-sm"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
