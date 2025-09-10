export default function CommentList() {
  const comments = [
    { id: 1, user: "User1", text: "Nice video!" },
    { id: 2, user: "User2", text: "Thanks for sharing." },
  ];

  return (
    <div className="mt-4">
      <h3 className="text-md font-semibold mb-2">Comments</h3>
      <ul className="space-y-2">
        {comments.map((comment) => (
          <li key={comment.id} className="border-b pb-2">
            <p className="text-sm font-semibold">{comment.user}</p>
            <p className="text-sm text-gray-700">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
