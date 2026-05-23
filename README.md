# NextAge - Game Library Manager

A cross-platform game library manager built with Electron, React, and TypeScript.

## Prerequisites

- Node.js 18+ 
- PostgreSQL (for backend)
- Docker (optional, for backend database)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Backend Setup

Navigate to the backend directory and start the server:

```bash
cd src/backend
npm install
npm run dev
```

The backend should run on `http://localhost:4000`

### 3. Run the Electron App

In the root directory:

```bash
npm run electron:dev
```

## Features

- 🔐 User authentication (Login/Signup)
- 🎮 Browse games from IGDB
- 🔥 Trending games
- 📅 Upcoming releases
- 🆕 Recently released games
- 🔍 Search functionality

## Tech Stack

- **Electron** - Desktop app framework
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Express** - Backend API
- **PostgreSQL** - Database
- **IGDB API** - Game data

## Development

- `npm run dev` - Start Vite dev server
- `npm run electron:dev` - Start Electron with hot reload
- `npm run build` - Build for production
- `npm run electron:build` - Build Electron app

## Project Structure

```
NextAge/
├── electron/          # Electron main process
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   └── backend/       # Express backend
└── dist/              # Build output
```
