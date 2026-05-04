import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `px-4 py-2 rounded-lg ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">
        NotesApp
      </h1>

      {/* Links */}
      <div className="flex gap-4">
        <Link to="/" className={linkStyle("/")}>
          Home
        </Link>

        <Link to="/create" className={linkStyle("/create")}>
          Create Note
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;