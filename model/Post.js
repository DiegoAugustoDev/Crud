const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    item:{type:String}
})

module.exports = mongoose.model("Post", postSchema)