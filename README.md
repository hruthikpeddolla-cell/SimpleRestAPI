# Simple REST API

## Project Overview

Simple REST API is a beginner-friendly backend project developed using **Node.js and Express.js**. It demonstrates how to create RESTful API endpoints and perform CRUD (Create, Read, Update, Delete) operations on notes or contacts.

The API can be tested using Postman.

## Features

- Create a new note or contact.
- Retrieve all records.
- Retrieve a specific record by ID.
- Update an existing record.
- Delete a record by ID.
- Handle HTTP requests and JSON responses.
- Test API endpoints using Postman.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- Postman
- In-memory array or JSON file for data storage

## Project Structure

```text
SimpleRestAPI/
├── server.js
├── package.json
├── data/
│   └── notes.json
└── README.md
```

*Note: Update the folder structure if your project uses different filenames or stores data in memory.*

## Installation and Setup

### Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the project folder

```bash
cd SimpleRestAPI
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the server

```bash
npm start
```

If your project does not have a start script in `package.json`, run:

```bash
node server.js
```

The server will run at the local URL configured in your project, for example:

```text
http://localhost:3000
```

## API Endpoints

The following endpoints are examples. Adjust them to match your implementation.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/notes` | Retrieve all notes |
| GET | `/notes/:id` | Retrieve a note by ID |
| POST | `/notes` | Create a new note |
| PUT | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

## Testing with Postman

1. Start the Node.js server.
2. Open Postman.
3. Enter the API URL and select the HTTP method.
4. For POST and PUT requests, select **Body → raw → JSON**.
5. Send the request and verify the response.

Example JSON request body:

```json
{
  "title": "Learn Node.js",
  "content": "Practice REST API CRUD operations"
}
```

## Learning Outcomes

- Understanding REST API fundamentals.
- Working with Node.js and Express.js.
- Using HTTP methods such as GET, POST, PUT, and DELETE.
- Handling JSON request bodies and responses.
- Testing backend APIs with Postman.

## Future Enhancements

- Connect a database such as MySQL or MongoDB.
- Add input validation and error handling.
- Implement user authentication.
- Add automated API tests.

## Author

Created as a beginner backend development project to practice REST APIs using Node.js and Express.js.

## License

This project is available for learning and educational purposes.
