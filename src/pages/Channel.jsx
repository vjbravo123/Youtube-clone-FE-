import VideoCard from "../components/VideoCard";

export default function Channel() {
  const videos = [
    {
      id: 4,
      title: "Channel Video 1",
      channel: "My Channel",
      thumbnail: "https://via.placeholder.com/300x180",
    },
    {
      id: 5,
      title: "Channel Video 2",
      channel: "My Channel",
      thumbnail: "https://via.placeholder.com/300x180",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Channel</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
