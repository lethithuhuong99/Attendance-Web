const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require("./server/database/connection");

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
// app.set('views', path.resolve(__dirname,'views/ejs'))

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/libs", express.static(path.resolve(__dirname, "assets/libs")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use(
  "/extra-libs",
  express.static(path.resolve(__dirname, "assets/extra-libs"))
);
app.use("/js", express.static(path.resolve(__dirname, "dist/js")));
app.use("/css", express.static(path.resolve(__dirname, "dist/css")));

// load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
