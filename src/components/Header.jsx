export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold text-red-600">YouTube Clone</h1>
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded-lg px-3 py-1 w-1/3 focus:outline-none focus:ring focus:ring-blue-500"
      />
    </header>
  );
}
