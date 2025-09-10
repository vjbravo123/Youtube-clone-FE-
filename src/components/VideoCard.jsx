import { Link } from "react-router-dom";

export default function VideoCard({ id, title, channel, thumbnail }) {
  return (
    <div className="bg-white rounded-lg shadow p-2">
      <Link to={`/watch/${id}`}>
        <img
          src={thumbnail}
          alt={title}
          className="rounded-lg mb-2"
        />
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-600">{channel}</p>
      </Link>
    </div>
  );
}
