# Moon Photography

This repository contains the Moon Photography web application (frontend + backend).

Structure:

- client/ — React + Vite frontend
- server/ — Express backend

Quick start (development):

1. Start backend (runs on port 5001):

```bash
cd server
npm install
npm run dev
```

2. Start frontend (Vite, runs on port 5173):

```bash
cd client
npm install
npm run dev
```

Notes:
- Add a remote and push if you want to create a remote repository (GitHub/GitLab).
- Environment variables for server are in `server/.env` (PORT=5001 in the repo). Do not commit secrets.
