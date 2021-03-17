const express = require("express");
const app = express();
const path = require("path");
// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

// use view engine ejs
app.get("/about", function (req, res) {
  res.render("about");
});
