# Projects

## Task 1: Link Shortener

### Overview
In this project, you will build an API to create short URLs, similar to the functionality of services like Bitly. The URL shortener will take a long URL, generate a unique short URL for it, and store the mapping between the short and original URLs. When a user visits the short URL, they will be redirected to the original URL.

### Technologies Used
- **Backend Language**: Node.js (Express)
- **Database**: MongoDB
- **Frontend**: Optional (can be added if needed for extra features)
- **Other Tools**: JavaScript

### Features
- Accept a long URL and return a short URL.
- Redirect the user from the short URL to the original long URL.
- Store the mapping of short URLs to original URLs in a MongoDB database.
- Optional: Implement user management to allow users to manage their shortened URLs.

### Instructions
1. Set up a Node.js project with Express.
2. Connect the app to MongoDB for storing URL mappings.
3. Create API endpoints for:
   - Generating a short URL from a long URL.
   - Redirecting from the short URL to the original URL.
4. Test the functionality of your API to ensure it works correctly.

---

## Task 2: Online Code Editor

### Overview
In this project, you will create an online code editor that runs in browsers and offers complete IDE functionalities. The editor allows users to write code, choose a programming language, and execute it on the server. The output is displayed on the same webpage, making it a valuable tool for coding practice, interviews, and learning.

### Technologies Used
- **Frontend**: HTML, CSS, ReactJS
- **Backend**: API to execute the code (Node.js, Express, or other languages)
- **Hosting**: Hosting services for frontend and backend (e.g., Netlify, Heroku)
- **Other Tools**: JavaScript, Fetch API

### Features
- Users can choose a programming language.
- Users can write and edit code directly in the editor.
- The frontend sends the code and language selection to the backend.
- The backend executes the code and returns the output, which is displayed on the webpage.
- Optional: Implement syntax highlighting and error handling in the frontend.

### Instructions
1. Set up the frontend using **ReactJS** to create the user interface for the code editor.
2. Use **HTML** and **CSS** for styling the editor and page layout.
3. Set up the **Backend API** (Node.js or other language) to execute code received from the frontend.
4. Use the **Fetch API** or AJAX to send the code from the frontend to the backend and display the result.
5. Host the frontend on **Netlify** or **Vercel**, and the backend on **Heroku** or another cloud platform.
