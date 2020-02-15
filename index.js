
/** ---- Required External Modules  ---- **/
 
const express = require("express");


/** ---- App Variables ---- **/

const app = express();
const port = process.env.PORT || "8000";

 

/** ---- App Configuration ---- **/

// pug render template used instead of static html 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/**  ---- Routes Definitions ---- **/

 app.get("/", (req, res) => {
  res.status(200).send("NodeJS, Express Basic Setup");
});

/** ---- Server Activation ---- **/

 app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});