import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        YT Clone
      </Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/auth" className="hover:text-blue-400">
          Sign In
        </Link>
      </nav>
    </header>
  );
}
