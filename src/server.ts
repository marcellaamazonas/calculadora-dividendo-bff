import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import path from "path";

import router from "./routes/bff-router";

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("", router);

app.listen(8000, () => {
  console.log("Application started on port 8000!");
});
