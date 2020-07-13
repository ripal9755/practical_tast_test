const express = require("express");
const app = express();
const path = require("path");
const webpack = require("webpack");
const webpaclMiddleware = require("webpack-dev-middleware");
const bodyparser = require("body-parser");
const webpackConfig = require("../webpack.config.dev")
const fs = require("fs");
const multer = require('multer')
const pdfParse = require("pdf-parse");
app.use(express.static(__dirname + "./public/"));

var Storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({
    storage: Storage
}).single("file");

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(webpaclMiddleware(webpack(webpackConfig)))

app.listen("5000", () => {
    console.log("Server  started on port number 5000");
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
})

app.post("/uploadFile", upload, (req, res) => {
    var pdfFile = fs.readFileSync("./public/uploads/" + req.file.filename);
    pdfParse(pdfFile).then((data) => {
        res.send(data.text)
        console.log(req);
    })
});

app.post("/handleSubmit", (req, res) => {
    res.send(
        "<h1>UserName:  " + req.body.userName + "<br/>Gender:  " + req.body.gender + "<br/>Comment:  " + req.body.comment + "</h1>"
    )
})