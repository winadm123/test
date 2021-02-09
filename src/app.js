const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");


// public static path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));

app.set("view engine","hbs");
app.set('views',templatePath);
hbs.registerPartials(partials_path)


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "oops ! page not found try again"
  });
});

app.listen(port, () => {
  console.log(`apps running on ${port}`);
});
