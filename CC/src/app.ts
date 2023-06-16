import express from "express";
import connection from "./config/config";
import { json, urlencoded } from "body-parser";
import Router from "./routes/route";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/routes", Router);

connection
  .sync()
  .then(() => {
    console.log("Database Synced Successfully");
  })
  .catch((err) => {
    console.log("Database Sync Failed");
    console.log(err);
  });

app.listen(8080);