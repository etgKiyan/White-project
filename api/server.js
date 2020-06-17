//  Express web server in server.js where we configure CORS,   --> Express is one of the most popular web frameworks for Node.js that supports routing, middleware
//  initialize & run Express REST APIs.
const express = require("express");

 // body-parser helps to parse the request and create the req.body object
const bodyParser = require("body-parser");

// cors provides Express middleware to enable CORS with various options.
const cors = require("cors");

const db = require("./db/db");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to whiteHat application." });
});

require("./routes/products.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});