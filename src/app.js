import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes.js"; 
import { swaggerDocs } from "./swagger.js";


const app = express();
swaggerDocs(app);

dotenv.config()
app.use(bodyParser.json());
app.use("/", routes);

export default app;