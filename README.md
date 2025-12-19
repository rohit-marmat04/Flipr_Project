# Flipr_Project - Landing Page & Admin Panel
A full-stack web application featuring a public Landing Page and a private Admin Panel for content management. Built with MongoDB, Express.js, React, and Node.js.
## Prerequisites
Before you begin, ensure you have the following installed on your system:
- **Node.js** (v14 or higher): [Download Here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account** (or a local MongoDB installation)
---
## 🚀 Installation Guide
This project consists of two main parts: the **Server** (Backend) and the **Client** (Frontend). You need to install dependencies for both.
### Option 1: One-Command Installation (Recommended)
We have set up a script to install everything at once. Open your terminal in the **root directory** of the project and run:
```bash
npm run install-all
```
*This script will automatically install dependencies for the root, server, and client folders.*
### Option 2: Manual Installation
If you prefer to install them manually or encounter issues with the script:
1.  **Root Dependencies:**
    ```bash
    npm install
    ```
2.  **Server Dependencies:**
    ```bash
    cd server
    npm install
    cd ..
    ```
3.  **Client Dependencies:**
    ```bash
    cd client
    npm install
    cd ..
    ```
---
## 📸 Screenshots
### Landing Page
![Landing Page](client/assets/Screenshot%20(20).png)

### Admin Page
![Landing Page](client/assets/Screenshot%20(21).png)
*The public facing page displaying projects and clients.*
### Admin Panel
![Admin Panel](./screenshots/admin-panel.png)
*The private dashboard for managing content.*
---
## ⚙️ Configuration
1.  Navigate to the `server` directory.
2.  Open (or create) the `.env` file.
3.  Ensure your MongoDB Connection String is correct:
    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/mern_db?retryWrites=true&w=majority
    PORT=5000
    ```
---
## ▶️ Running the Application
To run both the Backend and Frontend concurrently (at the same time), run the following command from the **root directory**:
```bash
npm start
```
- **Frontend Application**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
### Accessing the Admin Panel
Navigate to [http://localhost:5173/admin](http://localhost:5173/admin) to manage Projects, Clients, and view Submissions.
---
## 📂 Project Structure
- **/client**: React Frontend (Vite)
    - `src/pages`: LandingPage and AdminPanel components.
    - `src/components`: Reusable UI components.
- **/server**: Express Backend
    - `models.js`: MongoDB Schema definitions.
    - `routes.js`: API Endpoints.
    - `index.js`: Server entry point and database connection.
## ❗ Troubleshooting
- **"Address already in use :::5000"**: This means the server is already running. Stop the previous process (Ctrl+C) or kill the terminal.
- **"MongoDB Connection Error"**: Check your internet connection and ensure your IP address is whitelisted in MongoDB Atlas Network Access.
- **"Vite is not recognized"**: Ensure you ran `npm install` inside the `client` folder.
