import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-200 p-4">
      <nav className="space-y-2">
        <Link to="/" className="block text-gray-800 hover:text-blue-600">
          Home
        </Link>
        <Link to="/channel/1" className="block text-gray-800 hover:text-blue-600">
          Channel
        </Link>
        <Link to="/auth" className="block text-gray-800 hover:text-blue-600">
          Sign In
        </Link>
      </nav>
    </aside>
  );
}
