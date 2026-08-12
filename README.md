# TaskFlow Dashboard

TaskFlow Dashboard is a React + Vite project for managing and viewing tasks through a clean dashboard interface.

## Prerequisites

Make sure the following are installed on your computer before running the project:

- Node.js (v18 or newer recommended)
- npm (usually included with Node.js)

## How to Install and Run (Zip File)

1. Download the project zip file and extract it to a folder on your computer.

2. Open a terminal or command prompt in the extracted project folder or open folder in Editor like VScode etc.

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at:

## Features

Create new tasks
View all tasks in the dashboard
taskdetails page for viewing each task in detail.
Mark tasks as completed or pending
Delete tasks
Loading state while fetching tasks
Error handling for failed API requests
Responsive dashboard UI
Centralized task state management using React Context API
API integration for task operations like (fetch, fetchbyid, create, delete, patch).

## Production Build

To create a production-ready build, run:

npm run build

To preview the production build locally:

npm run preview

## Useful Commands

- `npm install` – installs all project dependencies
- `npm run dev` – runs the app in development mode
- `npm run build` – creates a production build

## Project Structure

project-folder/
├── public/
├── src/
│ ├── components/
│ ├── context/
│ ├── pages/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md

## Notes

- This project uses Vite for development and bundling.
- After extracting the zip file, keep the project folder intact and run all commands from that folder.
- If you are using a code editor like VS Code, you can open the extracted folder and run the commands from the integrated terminal.
