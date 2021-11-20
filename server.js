var express = require('express');
var path = require('path');

var app = express();
var http = require("http").createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Access public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


http.listen(process.env.PORT || 12645, async function () {
    console.log("listening on *:12645");
});