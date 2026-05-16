/* global chrome */
import { useEffect, useState } from "react";

function App() {

  const [videoUrl, setVideoUrl] = useState("");
  const [quality, setQuality] = useState("720");

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (
      typeof chrome !== "undefined" &&
      chrome.tabs
    ) {

      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },

        (tabs) => {

          const currentUrl = tabs[0]?.url;

          if (
            currentUrl &&
            currentUrl.includes("youtube.com/watch")
          ) {

            setVideoUrl(currentUrl);

          }

        }
      );

    }

  }, []);

  const handleDownload = async () => {
    if(!videoUrl){
      setStatus("please enter video URL");
      return;
    }
    try {
      setLoading(true);
      setStatus("Downloading...");

      const response = await fetch(
        "http://localhost:5000/download",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            url: videoUrl,
            quality,
            startTime,
            endTime,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {

  setStatus("Download completed");

  console.log("Downloaded File:", data.file);

}
else {

  setStatus("Download failed");

}

    }
    catch (error) {

      console.log(error);

      setStatus("Something went wrong");

    }
    finally {
      setLoading(false);
    }

  };



  return (

    <div className="w-[350px] min-h-[500px] bg-gray-900 text-white p-4">

      <h1 className="text-2xl font-bold text-center mb-5">
        YouTube Downloader
      </h1>



      <input
        type="text"
        placeholder="Paste YouTube URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
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
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
        className="
          w-full
          p-3
          rounded-lg
          bg-gray-800
          mb-3
          outline-none
        "
      >
        <option value="1080">1080p</option>
        <option value="720">720p</option>
        <option value="480">480p</option>
      </select>



      <input
        type="text"
        placeholder="Start Time (00:00:10)"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
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
        placeholder="End Time (00:00:20)"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="
          w-full
          p-3
          rounded-lg
          bg-gray-800
          mb-3
          outline-none
        "
      />



      <button
  disabled={loading}
        onClick={handleDownload}
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
        {loading ? "Downloading..." : "Download"}
      </button>



      <p className="text-center mt-4 text-sm text-green-400"></p><p className="text-center mt-4">
        {status}
      </p>

    </div>

  );

}

export default App;