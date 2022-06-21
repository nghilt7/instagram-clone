export default function Miniprofile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-10 rounded-full w-10 border p-[2px]"
        src="/logo.png"
        alt="photo"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">tannghi</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
