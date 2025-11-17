import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes.js"; 

const app = express();

app.use(bodyParser.json());
app.use("/", routes);

export default app;