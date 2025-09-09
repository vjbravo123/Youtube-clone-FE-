import { Link } from "react-router-dom";

export default function VideoCard() {
  return (
    <div className="bg-white rounded-lg shadow p-2">
      <Link to="/watch/1">
        <img
          src="https://via.placeholder.com/300x180"
          alt="Video Thumbnail"
          className="rounded-lg mb-2"
        />
        <h3 className="text-sm font-semibold text-gray-800">
          Sample Video Title
        </h3>
        <p className="text-xs text-gray-600">Channel Name</p>
      </Link>
    </div>
  );
}
