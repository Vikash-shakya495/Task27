1. app.get('/', (req, res) => {...})
Method: GET
Path: /
Description: This endpoint serves the dashboard page when the root URL (/) is accessed.
Action: Sends the index.html file located in the client directory.

3. app.get("/api/todos/get", (req, res) => {...})
Method: GET
Path: /api/todos/get
Description: This endpoint serves the get.html file when a GET request is made to /api/todos/get.
Action: Sends the get.html file located in the client directory.

5. app.get("/api/todos/get/:id", (req, res) => {...})
Method: GET
Path: /api/todos/get/:id
Description: This endpoint serves the get.html file when a GET request is made to /api/todos/get/:id, where :id is a parameter for a specific task ID.
Action: Sends the get.html file located in the client directory.

7. app.post("/api/todos/post", (req, res) => {...})
Method: POST
Path: /api/todos/post
Description: This endpoint serves the post.html file when a POST request is made to /api/todos/post.
Action: Sends the post.html file located in the client directory.

9. app.put("/api/todos/put/:id", (req, res) => {...})
Method: PUT
Path: /api/todos/put/:id
Description: This endpoint serves the put.html file when a PUT request is made to /api/todos/put/:id, where :id is a parameter for a specific task ID.
Action: Sends the put.html file located in the client directory.

11. app.delete("/api/todos/delete/:id", (req, res) => {...})
Method: DELETE
Path: /api/todos/delete/:id
Description: This endpoint serves the delete.html file when a DELETE request is made to /api/todos/delete/:id, where :id is a parameter for a specific task ID.
Action: Sends the delete.html file located in the client directory.

Summary
GET /: Serves the main dashboard (index.html).
GET /api/todos/get: Serves a page to get all tasks (get.html).
GET /api/todos/get/:id: Serves a page to get a specific task by ID (get.html).
POST /api/todos/post: Serves a page to create a new task (post.html).
PUT /api/todos/put/:id: Serves a page to update a specific task by ID (put.html).
DELETE /api/todos/delete/:id: Serves a page to delete a specific task by ID (delete.html).
