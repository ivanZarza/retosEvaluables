const express = require("express");
const cors = require("cors");
const studentRouters = require("./routers/student.router");
const addRouters = require("./routers/add.router");
const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Peticion recibida del cliente");
  console.log("URL: " + req.url);
  console.log("Metodo: " + req.method);
  console.log("User-agent: " + req.headers["user-agent"]);
  next();  
});

app.use(studentRouters);
app.use(addRouters);

app.use(errorHandling);

module.exports = app;