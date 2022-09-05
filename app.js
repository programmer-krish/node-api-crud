/**
 * Module - app.js
 * Description - Render all the routes
 */

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

//Swagger Doc
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");

const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const employeeRoute = require("./routes/employee.routes");

dotenv.config();

connectDb();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", employeeRoute);
app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

module.exports = app;
