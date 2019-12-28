//==first step is to create the dependencies==//
let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

//==in this step we will be creating routing for the app==//
require(".app/routing/apiRoutes.js")(app);
require(".app/routing/htmlRoutes.js")(app);

app.listen(port, () => console.log("Listening on port %s", port));
