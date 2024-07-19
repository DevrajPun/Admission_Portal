const express = require("express");
const app = express();
const port = 3000;
const DB = require("./db/dbCon");
const fileUpload = require("express-fileupload");
const route = require("./routes/path");

app.set("view engine", "ejs");

app.use(express.static("public"));

DB();

app.use(fileUpload({ useTempFiles: true }));

app.use("/", route);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
