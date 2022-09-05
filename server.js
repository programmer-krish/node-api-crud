/**
 * Module - PORT configuration
 */
const dotenv = require("dotenv");
const chalk = require("chalk");
const http = require("http");

const app = require("./app");

dotenv.config();
const port = process.env.PORT || 8000;

const server = http.createServer(app);

//configure the port
server.listen(port, () => {
  console.log(
    chalk.white.bgGreen.bold(" PORT ") +
      chalk.white.bgBlue.bold(` ${port} `) +
      chalk.white.bgGreen.bold(" MODE ") +
      chalk.white.bgRed.bold(` ${process.env.NODE_ENV} `)
  );
});

module.exports = server;
