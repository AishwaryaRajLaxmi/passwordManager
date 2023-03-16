// require the express
// const { Router } = require("express");
const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();
const dbConnection = require("./Database/connection");
dbConnection.connect();

// creating the express app
const app = express();

app.use(express.json());

// register the Router
app.use("/api/v1/user", require("./Routers/userRoutes"));
app.use("/api/v1/category", require("./Routers/categoryRoutes"));
app.use("/api/v1/passwords", require("./Routers/passwordRoutes"));

// default error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err, message: "Something Broke !" });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});
