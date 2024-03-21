import express from "express";
import bodyParser from "body-parser";

import router from "./routes/bff-router";

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/bff", router);

app.listen(8000, () => {
  console.log("Application started on port 8000!");
});
