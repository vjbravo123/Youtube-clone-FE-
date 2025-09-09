import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}
