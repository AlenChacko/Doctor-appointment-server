const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/database");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const path = require("path");

app.use("/api/user", userRoute);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
