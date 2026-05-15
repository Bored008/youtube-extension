function App() {
  return (
    <div className="w-[350px] min-h-[500px] bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-5">
        YouTube Downloader
      </h1>

      <input
        type="text"
        placeholder="Paste YouTube URL"
        className="
          w-full
          p-3
          rounded-lg
          bg-gray-800
          mb-3
          outline-none
        "
      />

      <select
        className="
          w-full
          p-3
          rounded-lg
          bg-gray-800
          mb-3
          outline-none
        "
      >
        <option>Highest</option>
        <option>1080p</option>
        <option>720p</option>
        <option>480p</option>
      </select>

      <input
        type="text"
        placeholder="Start Time (00:01:00)"
        className="
          w-full
          p-3
          rounded-lg
          bg-gray-800
          mb-3
          outline-none
        "
      />

      <input
        type="text"
        placeholder="End Time (00:05:00)"
        className="
          w-full
          p-3
          rounded-lg
          bg-gray-800
          mb-3
          outline-none
        "
      />

      <div className="space-y-2 mb-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="playlist" defaultChecked />
          Separate Playlist Videos
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="playlist" />
          Merge Playlist Videos
        </label>
      </div>

      <button
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          transition
          p-3
          rounded-lg
          font-semibold
        "
      >
        Download
      </button>
    </div>
  );
}

export default App;
