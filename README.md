# 🎬 YouTube Video Downloader Extension

A Chrome Extension built to learn backend development through a real-world project.

This project allows users to download YouTube videos directly from the browser, choose their preferred video quality, and even download only a specific portion of a video using custom start and end timestamps.

The main goal of this project was to understand how frontend applications communicate with backend servers, how media processing works, and how browser extensions interact with custom APIs.

---

## 🚀 Features

✅ Download YouTube videos directly from the browser

✅ Select video quality before downloading

✅ Custom video trimming using start and end timestamps

✅ Backend-powered video processing

✅ Chrome Extension integration

✅ Real-time communication between extension and server

✅ Simple and user-friendly interface

✅ Learning-focused backend architecture

---

## 🛠️ Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js

### Browser Technologies

- Chrome Extension APIs
- Manifest Configuration

### Development Tools

- Git
- GitHub
- VS Code

---

## 📚 What I Learned

This project was created mainly to gain practical backend development experience.

While building this project, I learned:

- Creating backend APIs using Express.js
- Handling frontend and backend communication
- Processing HTTP requests and responses
- Working with video download workflows
- Browser Extension development
- Chrome Extension permissions and manifest setup
- Error handling in backend applications
- Building complete end-to-end applications
- Managing local servers
- Understanding real-world client-server architecture

---

## ⚙️ How It Works

1. User opens the Chrome Extension.
2. User pastes a YouTube video link.
3. The extension sends the request to the backend server.
4. The server fetches available video formats.
5. User selects the desired video quality.
6. User can optionally enter:
   - Start Timestamp
   - End Timestamp
7. Backend processes the request.
8. The selected video portion is prepared and downloaded.

---

## 📂 Project Structure

```bash
youtube-extension/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── utils/
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   ├── background.js
│   └── styles.css
│
├── assets/
│
└── README.md
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Bored008/youtube-extension.git
```

### 2. Move Into Project Folder

```bash
cd youtube-extension
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Backend Server

```bash
npm start
```

or

```bash
node server.js
```

---

## 🧩 Load the Chrome Extension

### Step 1

Open Chrome and go to:

```text
chrome://extensions/
```

### Step 2

Enable **Developer Mode**

### Step 3

Click **Load Unpacked**

### Step 4

Select the extension folder

### Step 5

The extension will now appear in Chrome

---

## 🎯 Main Highlights

### 🎥 Video Quality Selection

Users can choose the quality in which they want to download the video before starting the download process.

Examples:

- 360p
- 480p
- 720p
- 1080p

### ✂️ Custom Video Trimming

Users can enter:

- Start Time
- End Time

and download only the required portion of a video instead of downloading the entire file.

Example:

```text
Start: 00:01:20
End:   00:03:45
```

Only that selected segment will be downloaded.

---

## 🔥 Future Improvements

- Audio-only downloads
- Better UI and animations
- Download history
- Multiple format support
- Faster processing
- Cloud deployment
- User authentication
- Dark mode support

---

## 🤝 Contributing

Contributions, suggestions, and improvements are always welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 📄 License

This project was developed for learning and educational purposes.

---

## 👨‍💻 Author

### Bored008

GitHub:

https://github.com/Bored008

Project Repository:

https://github.com/Bored008/youtube-extension

---

⭐ If you like this project, consider giving it a star on GitHub.
