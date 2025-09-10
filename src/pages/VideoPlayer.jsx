import CommentList from "../components/CommentList";

export default function VideoPlayer() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Video Player</h2>
      <p className="text-gray-600 mb-4">Here the video will be played.</p>
      <CommentList />
    </div>
  );
}
