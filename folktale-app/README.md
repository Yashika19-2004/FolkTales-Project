#  FolkTales – Local Stories, Proverbs & Mythology Collector

> *Preserving India’s cultural wisdom with AI — one tale, one proverb, one myth at a time.*

[![Website Badge](https://img.shields.io/badge/Visit-App-green)](https://your-deployment-url.com)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
[![Built with React & Node](https://img.shields.io/badge/Stack-React%20%7C%20Node.js-blue)](#)

##  What is FolkTales?

FolkTales is an open, community-powered web application designed to digitally preserve and share local Indian **stories**, **proverbs**, and **mythological tales**.  
It empowers users to contribute **in their native language**, using **voice or text**, and leverages **AI** to categorize, translate, and bring stories to life.

##  Our Mission

To protect India's cultural memory and oral traditions by providing an AI-enabled storytelling platform for villagers, students, researchers, and the general public.

##  Team

| Name             | Role                                  | Swecha Profile                                        |
|------------------|---------------------------------------|-------------------------------------------------------|
| Yashika Bagam    | Project Lead & Full-Stack Developer   | [@Yashika](https://code.swecha.org/Yashika)           |
| Sushma           | UI/UX Design                          | [@sushma16](https://code.swecha.org/sushma16)                                                  |
| Nishitha         | Voice/AI Integration                  | [@Nishitha04](https://code.swecha.org/Nishitha04)     |
| Asma             | Content Curator & Community Outreach  | [@mohdasma](https://code.swecha.org/mohdasma)                                                  |
| Shaheen          | Documentation & Deployment Specialist | [@Shaheen](https://code.swecha.org/Shaheen)                                                  |
##  Key Features
### 🗣️ 1. Voice Input in Native Languages
- Speak in **Telugu or English** to share stories, proverbs, or myths.
- **Speech-to-Text AI** converts voice to text instantly.
- Helps elderly and rural contributors avoid typing.

### 🧠 2. AI-Powered Categorization
- Automatically classifies each submission as:
  - 📘 *Folk Story*
  - 💬 *Proverb*
  - 🧙 *Mythological Tale*
- NLP-based tagging detects cultural and linguistic patterns.

### 🌐 3. Multilingual Support & Translation
- Submit and view content in **Telugu or English**.
- Auto-translate regional content into English (future enhancement).
- Promotes cross-language sharing of wisdom and tales.

### 📖 4. Text-to-Speech Playback
- Users can **listen to content** in Telugu or English.
- Empowers low-literacy users to enjoy content.
- Makes the platform inclusive and engaging.

### 🔍 5. Smart Browsing & Search
- Search by keywords, categories, or language.
- Filter tales by type: *Story*, *Proverb*, *Mythology*.
- Upcoming: **Semantic search** based on meaning.

### 🌱 6. Community Contributions
- Anyone can contribute village stories and wisdom.
- Supports grassroots cultural documentation.
- Future: Contributor profiles and recognition system.

### 🧾 7. Offline-Friendly & Lightweight
- Minimal UI with **React.js** optimized for mobile.
- Works on low bandwidth; ideal for semi-rural users.

### 📂 8. Open Cultural Dataset
- Content stored in **MongoDB** and exportable for research.
- Enables AI/ML projects, cultural preservation, and education.

###  Voice Input & AI
- **Speech-to-Text**: Speak in Telugu or English — AI transcribes it.
- **AI Categorization**: Classify whether it’s a *Story*, *Proverb*, or *Myth*.
- **Language Translation**: Auto-translate to English for wider reach.
- **Text-to-Speech**: Hear stories aloud in Telugu.

###  Cultural Collection
- Submit folk tales, moral stories, grandma proverbs, and local legends.
- Add regional tags (place, community, deity).
- Browse by **language**, **type**, or **theme**.

###  Smart Discovery
- **Semantic search** (coming soon): Search by meaning, not just words.
- **Filtered views**: Explore by category, region, or language.

##  Tech Stack

| Component   | Technology         |
|------------|--------------------|
| Frontend   | React.js, Tailwind CSS |
| Backend    | Node.js + Express  |
| Database   | MongoDB Atlas      |
| AI Tools   | Whisper, Google STT, IndicNLP, HuggingFace Transformers |
| Hosting    | Render / Vercel / Railway (Your Choice) |

## 🚧 Folder Structure

```
folktales-app/
├── client/       # React frontend
├── server/       # Node backend with Express + MongoDB
└── README.md
```

##  How It Works

1. **User speaks** or types a folk story
2. **AI converts** audio → text → category
3. **Story is stored** in MongoDB with tags
4. **Users explore** content, listen to audio, or share

##  Getting Started

###  Prerequisites
- Node.js & npm
- MongoDB Atlas or local MongoDB
- VS Code or any code editor

### Setup

```bash
# Clone the repository
git clone https://code.swecha.org/your_id/folktales.git
cd folktales

# Setup backend
cd server
npm install
touch .env            # Add your MONGO_URI here
node index.js

# Setup frontend
cd ../client
npm install
npm start
```

##  Upcoming Enhancements

- Contributor leaderboard  
- Mobile-friendly PWA version  
- Regional map of collected stories  
- AI-generated summaries  
- Voice reply system

##  Contributing

1. Fork the repo  
2. Create a feature branch  
3. Make your changes  
4. Submit a pull request

##  Acknowledgements

- Swecha Summer of AI 2025  
- OpenAI Whisper / Google STT APIs  
- AI4Bharat IndicNLP  
- Contributors from rural communities

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

<div align="center">
**"Every village has a voice. Every proverb holds wisdom. Every tale deserves to live on."**
</div>