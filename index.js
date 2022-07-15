const express = require("express");
const PORT = 3000;
const path = require("path");
const apiRoute = require("./routes/api")
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/items", {useUnifiedTopology: true, useNewUrlParser: true})

let db = mongoose.connection;

db.on("error", ()=>{
    console.log("error")
});

db.once("open", ()=>{
    console.log("banco carregado")
});

const app = express();


app.use("/", apiRoute);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT);
})

