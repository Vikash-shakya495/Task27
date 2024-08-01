const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());


// // Create a router
// const todosRouter = express.Router();

// // Middleware function to handle all methods at the /api/todos path
// todosRouter.use((req, res, next) => {
//     res.send(`You have reached the /api/todos endpoint with ${req.method} method`);
// });

// // Mount the router at /api/todos
// app.use('/api/todos', todosRouter);



const getTask = path.join(__dirname, "client", "get.html");
const dashboardTask = path.join(__dirname, "client", "index.html");
const deleteTask = path.join(__dirname, "client", "delete.html");
const updateTask = path.join(__dirname, "client", "post.html");
const getOnlyOneTask = path.join(__dirname, "client", "put.html");

app.get('/',(req,res) => {
    res.sendFile(dashboardTask);
})

//get request
app.get("/api/todos/get", (req, res) => {
  res.sendFile(getTask);
});

// get one task request
app.get("/api/todos/get/:id", (req, res) => {
  res.sendFile(getTask);
});

//post request
app.post("/api/todos/post", (req, res) => {
  res.sendFile(updateTask);
});

//update request
app.put("/api/todos/put/:id", (req, res) => {
  res.sendFile(getOnlyOneTask);
});

//delete request

app.delete("/api/todos/delete/:id", (req, res) => {
  res.sendFile(deleteTask);
});

app.listen(port, () => {
  console.log("server is running on http://localhost:3000");
});