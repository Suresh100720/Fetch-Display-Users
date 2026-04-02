🚀 Fetch & Display Users App

A simple and clean React application that fetches user data from a public API and displays it as cards, demonstrating API integration, useEffect, and handling loading, error, and success states.

📌 Project Overview

This project is part of a React internship daily assignment.
It is a user directory application where users can:

Fetch user data from a public API
View users in a structured card layout
Search users by name in real time
Handle loading and error states properly

🛠️ Tech Stack
React (Vite)
JavaScript (ES6+)
CSS (No UI libraries used)

📂 Folder Structure
fetch-users-app/
│── src/
│   │── components/
│   │   │── UserCard.jsx
│   │   │── LoadingSpinner.jsx
│   │   │── ErrorMessage.jsx
│   │
│   │── App.jsx
│   │── App.css
│   │── main.jsx

⚙️ Features
✅ Fetch users from API on page load
✅ Display users in responsive grid layout
✅ Loading indicator while fetching data
✅ Error handling with Retry button
✅ Search filter (no additional API calls)
✅ Clean and readable UI

🧠 Concepts Used
React Functional Components
useState Hook
useEffect Hook
API Integration (Fetch API)
Conditional Rendering
Component Reusability

▶️ How to Run the Project
Clone the repository:
git clone https://github.com/your-username/fetch-users-app.git
Navigate into the project:
cd fetch-users-app
Install dependencies:
npm install
Start the development server:
npm run dev

📸 Sample Output
User Directory

Search: ""

[User Cards Grid]

Leanne Graham
Email: Sincere@april.biz
City: Gwenborough
Company: Romaguera-Crona
Loading → shows "Loading..."
Error → shows error message with Retry button
Search → filters users in real time

✅ Evaluation Criteria Met
✔ useEffect runs only once on mount
✔ Handles loading, error, and success states
✔ Search works without new API calls
✔ No API key required
✔ No console errors

📌 Author
Suresh
