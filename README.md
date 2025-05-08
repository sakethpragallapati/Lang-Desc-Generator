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
│   ├── .env.example  # Template for environment variables
│   └── .gitignore    # Includes `.env`
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
git clone https://github.com/sakethpragallapati/Lang-Desc-Generator.git
cd lang-desc-generator
```

---

### 2. Configure Environment Variables

From the `server/` directory:

```bash
cp .env.example .env
```

Then open `.env` and replace placeholders with your actual credentials:

```env
MONGO_URL=your_real_mongodb_connection_string
API_KEY=your_real_google_gemini_api_key
```

---

### 3. Install & Start the Server

```bash
cd server
npm install
node server.js
```

---

### 4. Install & Start the Client

```bash
cd ../client
npm install
npm start
```

Ensure your backend runs on `http://localhost:5000`.

---

## 🔗 API Endpoint

`POST /api/gemini`

**Request:**

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

- 📎 File Uploads (e.g., for uploading supporting documents)
- 🔥 Firebase Integration (hosting, auth, Firestore)
- 📊 Admin dashboard for language analytics

---

## 🙌 Contributions

Pull requests and feature suggestions are welcome!

---

## 👤 Author

Developed by Pragallapati Saketh  
✨ Let’s build tools that preserve world languages together!
