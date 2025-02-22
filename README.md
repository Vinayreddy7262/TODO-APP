Todo App
A modern, interactive todo list application built with React, Vite, and pure CSS. This application allows users to add, delete, mark tasks as completed, edit tasks, and clear completed tasks, with a visually appealing and responsive design positioned at the top-left corner of the browser.
Instructions
To run the Todo App locally, follow these steps:
Clone the Repository
Clone the repository to your local machine using the following command:
bash
git clone https://github.com/Vinayreddy7262/TODO-APP.git

Navigate to the Project Directory
Change into the project directory:
bash
cd todo-app
Install Dependencies
Install the required dependencies using npm:
bash
npm install
This will install React, Vite, and other dependencies, including nanoid for generating unique IDs.
Run the Development Server
Start the development server to run the application:
bash
npm run dev
This will launch the app in your default web browser at http://localhost:5173 (or a similar port, depending on your system).
Use the Application  
Add tasks by typing in the input field and clicking "Add" or pressing Enter.
Mark tasks as completed using the checkbox.
Edit tasks by clicking "Edit," making changes, and clicking "Save" or pressing Enter.
Delete tasks by clicking "Delete."
Clear all completed tasks using the "Clear Completed" button.
The app persists tasks in your browser’s localStorage, so tasks remain after refreshing.
Features
Add new tasks with Enter key support
Mark tasks as completed with a stylish checkbox
Edit existing tasks with auto-focus and Enter key save
Delete individual tasks
Clear all completed tasks
Persistent storage using localStorage
Responsive design with pure CSS
Fade-in and slide-in animations for tasks and app
Vibrant, gradient-colored buttons and heading
Styled todo list with alternating backgrounds and hover effects
Task counter for remaining tasks
Positioned at the top-left corner of the browser
Technologies Used
React: For building the user interface with functional components, state, and props.
Vite: For fast development and building the application.
CSS: For styling with pure CSS, including animations and responsive design.
nanoid: For generating unique IDs for todo items.
Prerequisites
Node.js (version 14 or higher) and npm installed on your system.
Troubleshooting
If you encounter issues with npm run dev, ensure you have the latest version of Node.js and npm, and check that all dependencies installed correctly.
If the app doesn’t load, verify that your firewall or antivirus isn’t blocking the development server (port 5173 by default).
License
This project is open-source 