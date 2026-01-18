Assignment 3 — MongoDB CRUD API (Task Manager)

Project Description

This project is a Task Manager CRUD API built with Node.js, Express, and MongoDB (Mongoose).
It allows users to create, read, update, and delete tasks stored in a MongoDB database.
A simple frontend interface is also included to interact with the API.


 Technologies Used
	•	Node.js
	•	Express.js
	•	MongoDB Atlas
	•	Mongoose
	•	HTML + JavaScript
	•	Postman (for testing)


Project Structure

assignment3/
 ├── models/
 │    └── Task.js
 ├── routes/
 │    └── taskRoutes.js
 ├── public/
 │    └── index.html
 ├── server.js
 └── package.json


Installation & Setup
Install dependencies

npm install express mongoose cors
brew install mongodb/brew/mongodb-community
and etc.


▶️ Run the Server

node server.js

If successful, you will see:

MongoDB connected
Server running on port 3000


⸻
API Endpoints

Base URL:

http://localhost:3000/api

Method	Endpoint	Description
POST	/tasks	Create a new task
GET	/tasks	Get all tasks
GET	/tasks/:id	Get task by ID
PUT	/tasks/:id	Update task
DELETE	/tasks/:id	Delete task



Frontend Interface

Open in browser:

http://localhost:3000

Features:
	•	View all tasks
	•	Add new task


Features
	•	Full CRUD operations
	•	MongoDB data persistence
	•	Schema validation
	•	Error handling
	•	RESTful API
	•	Simple frontend interface


Author

Student: Abdikarim Nurmukhammed
<img width="1440" height="932" alt="Снимок экрана 2026-01-18 в 23 31 48" src="https://github.com/user-attachments/assets/31b63a49-2f6f-433d-9d49-6583d9596e74" />


