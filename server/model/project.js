

const { text } = require("body-parser")
const mongoose = require("mongoose")


const projectSchema = new mongoose.Schema({
    title :{
        type: String,
        text: true,
        min: 3,
        index: true
    },
    link_title :{
        type: String,
        text: true,
        min: 3,
    },
    description :{
        type: String,
        text: true,
        min: 3,
    },
    source: {
        type: String,
    },
    source_link: {
        type: String,
    },
    stacks: {
        type: Array,
    }
},{timestamps: true})

module.exports = mongoose.model("Project", projectSchema)