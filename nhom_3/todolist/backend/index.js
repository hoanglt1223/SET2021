const http = require("http");
const { getRouter, routes } = require("./router");
const { DATABASE } = process.env;
const hostname = "127.0.0.1";
const port = 8000;
const cors = require("cors");
const express = require("express");
const app = express();

//connect mongoose
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://set2021_tuphuc:hello@cluster0.vbssm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

let connectionDB = mongoose.connection;

connectionDB.on("error", function (err) {
  if (err) {
    console.log("Connect DB failed");
  }
});

connectionDB.on("connected", function () {
  console.log("Connect DB successfully");
});

connectionDB.on("disconnected", function () {
  console.log("Connect DB failed");
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.use(cors());
app.get("/tasks", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.post("/tasks", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.post("/find-task", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.patch("/edit-task", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.delete("/delete-task", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.post("/find-user", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.post("/sign-up", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.post("/sign-in", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.delete("/delete-user", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.patch("/edit-user", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.get("/projects", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.get("/project-users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.post("/project", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.post("/find-project", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.post("/project-users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.post("/find-project-user", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.patch("/edit-project", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.patch("/edit-project-user", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.delete("/delete-project", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const router = getRouter(req);
  console.log("controller => ", router);
  router(req, res);
});

app.listen(port, function () {
  console.log("CORS-enabled web server listening on port 8000");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
