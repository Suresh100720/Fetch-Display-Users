# 🚀 Fetch & Display Users (React App)

A clean and responsive React application that fetches user data from a public API and displays it as user cards.

This project demonstrates core React concepts such as **useEffect**, **API integration**, **state management**, and handling **loading, error, and success states**.

---

## 📌 Project Overview

This application fetches a list of users from an external API and displays them in a structured card layout.

Users can:

* View user details (name, email, city, company)
* Search users in real-time
* See loading and error states during API calls
* Retry fetching data if an error occurs

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🎯 JavaScript (ES6+)
* 🎨 CSS (Grid / Flexbox)
* 🌐 Fetch API

---

## 🔗 API Used

* **Endpoint:** https://jsonplaceholder.typicode.com/users
* **Method:** GET
* **No API key required**

---

## 📂 Project Structure

```
src/
│── components/
│   ├── UserCard.jsx
│   ├── LoadingSpinner.jsx
│   ├── ErrorMessage.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

---

## ⚙️ Features

* ✅ Fetch users using `useEffect`
* ⏳ Loading state with spinner
* ❌ Error handling with retry button
* 📦 Display users in responsive grid
* 🔍 Real-time search filtering (no extra API calls)
* 🔁 Retry functionality for failed requests

---

## 🧠 Concepts Covered

* React Hooks (`useState`, `useEffect`)
* API Fetching using async/await
* Conditional rendering
* Component-based architecture
* Handling UI states (Loading, Error, Success)
* Search filtering on client-side data

---

## 🧩 Components

### 1️⃣ App.jsx

* Fetches user data
* Manages state (users, loading, error, search)
* Renders UI based on state

### 2️⃣ UserCard.jsx

* Displays:

  * Name
  * Email
  * City
  * Company name

### 3️⃣ LoadingSpinner.jsx

* Displays loading indicator while fetching data

### 4️⃣ ErrorMessage.jsx

* Shows error message
* Includes Retry button to re-fetch data

---

## 🔄 Application Flow

1. App loads
2. API call is triggered using `useEffect`
3. While fetching → LoadingSpinner is shown
4. If error → ErrorMessage is shown with Retry option
5. On success → Users are displayed in cards
6. Search filters users instantly without API calls

---

## 🧪 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/fetch-users-app.git

# 2. Navigate to project folder
cd fetch-users-app

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

---

## 📸 UI Preview

* Responsive user cards layout
* Clean and minimal design
* Real-time search filtering

---

## ✅ Evaluation Criteria

✔️ useEffect runs only once on mount
✔️ Proper handling of loading, error, and success states
✔️ Retry functionality works correctly
✔️ Search works on existing data (no additional API calls)
✔️ Clean and readable UI
✔️ Proper component structure

---

## 📌 Future Improvements

* Add pagination
* Add dark mode 🌙
* Enhance UI with animations
* Add user details page

---

## 🙌 Acknowledgements

* JSONPlaceholder API for free dummy data
* React documentation

---

## 📌 Author

Suresh
