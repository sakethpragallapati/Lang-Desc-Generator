
# 🌐 Language Description Generator

A full-stack web app that uses Google's Gemini API to generate detailed descriptions of world languages. Users input a language name, and the app returns a structured, informative write-up stored in MongoDB for future reference.

---

## 📁 Folder Structure

```
project-root/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.js
│   │   │   └── Form.js
│   │   └── index.js
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Languages.js
│   ├── routes/
│   │   └── api/
│   │       └── gemini.js
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## 🚀 Features

- 🌍 Input any world language and get a structured description.
- 🔄 Checks for duplicates before querying Gemini API.
- 🧠 Powered by Gemini 2.0 Flash (Google Generative Language API).
- 💾 MongoDB stores all generated descriptions.
- ⚛️ React frontend with responsive UI.

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **API**: Google Gemini 2.0 Flash

---

## 🧪 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/lang-desc-generator.git
cd lang-desc-generator
```

### 2. Setup the Server

```bash
cd server
npm install
touch .env
```

Inside `.env`:

```
MONGO_URL=your_mongodb_connection_string
API_KEY=your_google_gemini_api_key
```

Then run:

```bash
node server.js
```

### 3. Setup the Client

```bash
cd ../client
npm install
npm start
```

Make sure the server is running at `http://localhost:5000`.

---

## 🧱 API Endpoint

`POST /api/gemini`

**Request Body:**

```json
{
  "langName": "Swahili"
}
```

**Response:**

```json
{
  "output": "Swahili is a Bantu language spoken in..."
}
```

---

## 📌 Future Enhancements

- 📎 **File Uploads** using Multer (e.g., for uploading supporting documents).
- 🔥 **Firebase Integration** for hosting, authentication, or Firestore.
- 📊 Admin dashboard for language analytics.

---

## 🙌 Contributions

Pull requests and feature suggestions are welcome!

---

## 👤 Author

Developed by Pragallapati Saketh  
✨ Let’s build tools that preserve world languages together!
