const express = require("express");
const cors = require("cors");
const ytDlp = require("yt-dlp-exec")
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend in running ...");
});

//download api
app.post("/download", async (req, res) => {
  try {
    const { url, quality } = req.body;
    const outputPath = path.join(__dirname, "downloads", "%(title)s.%(ext)s");

    let format = "best";

    if(quality === "1080"){
      format = "bestvideo[height<=1080]+bestaudio/best"
    }
    else if(quality === "720"){
      format = "bestvideo[height<=720]+bestaudio/best"
    }
    else if(quality === "40"){
      format = "bestvideo[height<=480]+bestaudio/best"
    }

    await ytDlp(url,{
      output: outputPath,
      format: format,
    });

    await ytDlp(url, {
      output: outputPath,
    });

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
