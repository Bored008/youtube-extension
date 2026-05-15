const express = require("express");
const cors = require("cors");
const ytDlp = require("yt-dlp-exec")
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
ffmpeg.setFfmpegPath(ffmpegPath);
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend in running ...");
});

//download api
app.post("/download", async (req, res) => {
  try {
    const {
  url,
  quality,
  startTime,
  endTime
} = req.body;
    const downloadsDir = path.join(__dirname, "downloads");
    const tempTemplate = path.join(downloadsDir, "temp.%(ext)s");

    const trimmedPath = path.join(downloadsDir, `trimmed-${Date.now()}.mp4`);

    let format = "best";

    if(quality === "1080"){
      format = "bestvideo[height<=1080]+bestaudio/best"
    }
    else if(quality === "720"){
      format = "bestvideo[height<=720]+bestaudio/best"
    }
    else if(quality === "480"){
      format = "bestvideo[height<=480]+bestaudio/best"
    }

    await ytDlp(url, {
  output: tempTemplate,
  format: format,
  mergeOutputFormat: "mp4",
  ffmpegLocation: ffmpegPath,
});

    // locate the actual downloaded temp file (yt-dlp replaces %(ext)s)
    const downloadedFiles = fs.readdirSync(downloadsDir);
    const tempFile = downloadedFiles.find((f) => f.startsWith("temp."));
    if (!tempFile) throw new Error("Downloaded temp file not found");
    const tempPath = path.join(downloadsDir, tempFile);

    if (startTime && endTime) {
      const parseTimeToSeconds = (t) => {
        if (typeof t === "number") return t;
        if (!t) return 0;
        if (String(t).includes(":")) {
          const parts = String(t).split(":").map(Number).reverse();
          let secs = 0;
          if (parts[0]) secs += parts[0];
          if (parts[1]) secs += parts[1] * 60;
          if (parts[2]) secs += parts[2] * 3600;
          return secs;
        }
        return Number(t);
      };

      const startSec = parseTimeToSeconds(startTime);
      const endSec = parseTimeToSeconds(endTime);
      const duration = endSec - startSec;
      if (duration <= 0) throw new Error("Invalid start/end times for trimming");

      await new Promise((resolve, reject) => {
        ffmpeg(tempPath)
          .setStartTime(startSec)
          .setDuration(duration)
          .output(trimmedPath)
          .on("end", () => {
            console.log("Trimming finished");
            try { fs.unlinkSync(tempPath); } catch (e) { console.warn(e.message); }
            resolve();
          })
          .on("error", (err) => {
            console.log(err);
            reject(err);
          })
          .run();
      });
    }

    res.json({
      success: true,
      message: "video downloaded successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Download failed",
    });
  }
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
