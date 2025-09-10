import VideoCard from "../components/VideoCard";

export default function Home() {
  const videos = [
    {
      id: 1,
      title: "Sample Video 1",
      channel: "Channel One",
      thumbnail: "https://via.placeholder.com/300x180",
    },
    {
      id: 2,
      title: "Sample Video 2",
      channel: "Channel Two",
      thumbnail: "https://via.placeholder.com/300x180",
    },
    {
      id: 3,
      title: "Sample Video 3",
      channel: "Channel Three",
      thumbnail: "https://via.placeholder.com/300x180",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
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
  );
}
