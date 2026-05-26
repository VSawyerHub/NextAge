
---

# NextAge - Game Library Manager

<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Version](https://img.shields.io/badge/Version-0.1.0-brightgreen)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)

A modern, cross-platform game library manager built with **React**, **TypeScript**, and **Tauri**. Discover trending games, search for titles, and manage your personal game collection all in one sleek interface.

[🎮 Features](#features) • [🚀 Getting Started](#getting-started) • [📦 Project Structure](#project-structure) • [🛠️ Development](#development) • [📄 License](#license)

</div>

---

## 📋 Overview

**NextAge** is a desktop application that provides a beautiful interface for browsing, searching, and managing games. It integrates with popular game APIs (like IGDB) to fetch real-time data on trending games, upcoming releases, and recently launched titles. Users can authenticate, build personalized collections, and stay updated with the gaming community.

### Tech Stack

- **Frontend**: React 18 + TypeScript
- **Desktop Framework**: Tauri 2
- **Styling**: Tailwind CSS + PostCSS
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Backend**: Rust (Tauri commands)

---

## ✨ Features

- 🔐 **User Authentication** - Secure login and registration system
- 🎮 **Game Discovery** - Browse trending, upcoming, and recently released games
- 🔍 **Advanced Search** - Search for specific games with instant results
- 🏷️ **Game Details** - View game ratings, release dates, and cover art
- 📱 **Responsive Design** - Beautiful glassmorphic UI that works on any platform
- 🎨 **Modern UI** - Dark theme with glassmorphic effects and smooth animations
- 💾 **Session Persistence** - Remember user sessions with secure token storage
- 🔄 **Real-time Data** - Fetches current game data from external APIs

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.x
- **npm** >= 9.x (or your preferred package manager)
- **Rust** >= 1.70.x (required for Tauri)
    - Install from [https://www.rust-lang.org/](https://www.rust-lang.org/)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/NextAge.git
   cd NextAge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   ```
   Update with your API credentials

---

## 🛠️ Development

### Running in Development Mode

Start the application in development mode with hot-reload:

```bash
npm run tauri:dev
```

This command:
- Starts the Vite dev server on `http://localhost:5173`
- Launches the Tauri application window
- Enables hot-reload for frontend changes

### Building for Production

Create optimized, platform-specific binaries:

```bash
npm run tauri:build
```

This will generate executable files for your current platform in the `src-tauri/target/release/` directory.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server only |
| `npm run build` | Build frontend assets without Tauri |
| `npm run preview` | Preview production build locally |
| `npm run tauri` | Open Tauri CLI (advanced usage) |
| `npm run tauri:dev` | Start development with Tauri |
| `npm run tauri:build` | Build production binaries |

---

## 📦 Project Structure

```
NextAge/
├── src/                          # React frontend
│   ├── components/               # Reusable React components
│   │   └── GameCard.tsx          # Game display card component
│   ├── contexts/                 # React Context API
│   │   └── AuthContext.tsx       # Authentication state management
│   ├── pages/                    # Page components (routes)
│   │   ├── Login.tsx             # Login/registration page
│   │   └── Library.tsx           # Main game library page
│   ├── services/                 # API integration
│   │   └── api.ts                # Axios instances and API calls
│   ├── styles/                   # Stylesheets
│   │   ├── styles.css            # Custom CSS
│   │   └── index.css             # Global styles
│   ├── types/                    # TypeScript interfaces
│   │   └── index.ts              # Shared type definitions
│   ├── App.tsx                   # Root component with routing
│   └── main.tsx                  # React entry point
│
├── src-tauri/                    # Tauri backend (Rust)
│   ├── src/
│   │   └── main.rs               # Tauri main process
│   ├── Cargo.toml                # Rust dependencies
│   ├── build.rs                  # Build configuration
│   └── tauri.conf.json           # Tauri app configuration
│
├── public/                       # Static assets
│   └── icons/                    # App icons for different platforms
│
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies
└── README.md                     # This file

```

---

## 🏗️ Architecture

### Authentication Flow

```
User Input (Login.tsx)
    ↓
authService.login() (api.ts)
    ↓
Backend Authentication
    ↓
Tokens Stored (localStorage)
    ↓
AuthContext.login() updates state
    ↓
User Redirected to Library
```

### Game Data Flow

```
User Interaction (Library.tsx)
    ↓
gamesService.getTrending() / searchGames() (api.ts)
    ↓
External Game API (IGDB)
    ↓
Data Formatted and Displayed (GameCard.tsx)
    ↓
Rendered in Grid Layout
```

---

## 🔑 Key Components

### **AuthContext.tsx**
Manages global authentication state using React Context API:
- User profile information
- Access tokens and refresh tokens
- Login/logout functionality
- Persistent session storage

### **Library.tsx**
Main application page featuring:
- Tabbed navigation (Trending, Upcoming, Recently Released)
- Search functionality
- Responsive game grid layout
- Loading states and error handling

### **GameCard.tsx**
Reusable component displaying individual game information:
- Game cover art
- Title and release date
- Star rating
- Hover effects with animations

### **api.ts**
Centralized API service layer:
- Axios instances with authentication headers
- Authentication endpoints (login, register)
- Game data fetching methods
- Error handling and interceptors

---

## 🎨 Styling

The project uses **Tailwind CSS** for styling with:
- Dark theme optimized for gaming context
- Glassmorphic design patterns
- Responsive layouts (mobile-first approach)
- Smooth animations and transitions

Key CSS utilities used:
- `backdrop-blur-lg` - Glassmorphic effects
- `bg-white/10` - Semi-transparent backgrounds
- `hover:scale-105` - Interactive animations
- `grid-cols-responsive` - Adaptive grid layouts

---

## 🔐 Security

- ✅ Context isolation enabled in Tauri
- ✅ Secure token storage in localStorage
- ✅ HTTPS communication with backend
- ✅ TypeScript strict mode enabled
- ✅ Environment variable protection

---

## 📱 Platform Support

- ✅ Windows (installer + portable)
- ✅ macOS (DMG)
- ✅ Linux (AppImage)

---

## 🐛 Debug Mode

To enable developer tools during development:

```bash
npm run tauri:dev
```

Press `F12` to open DevTools or right-click → Inspect Element

---

## 🚀 Performance Tips

- Lazy load images (use web native `loading="lazy"`)
- Implement pagination for large game lists
- Cache game results in localStorage
- Use React.memo for GameCard components
- Debounce search input

---

## 📝 Environment Variables

Create a `.env.local` file in the project root:

```
VITE_API_BASE_URL=https://api.example.com
VITE_IGDB_CLIENT_ID=your_igdb_client_id
VITE_IGDB_ACCESS_TOKEN=your_igdb_token
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📚 Resources

- [Tauri Documentation](https://tauri.app/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 👤 Author

Created with ❤️ by the NextAge team

---

<div align="center">

⭐ If you like this project, please consider giving it a star!

</div>