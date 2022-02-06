const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

require("dotenv").config();

//app
const app = express();

//Db
mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => console.log("DB CONNECTION SUCCESSFUL"))
  .catch((err) => console.log(`Db CONNECTION ERROR: ${err} `));

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors());

// Route Middleware
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
