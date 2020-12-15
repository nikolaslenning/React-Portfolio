// const express = require("express");
// const path = require('path')
// const app = express();

// const PORT = process.env.PORT || 8080;

// app.use(express.static('public'))

// //Data Parsing middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// // app.set("view engine", "handlebars");

// app.get("*", function(req, res) {            
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//   });

// //Server listens for activity
// app.listen(PORT, function() {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
//   });