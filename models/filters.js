const { Schema, model } = require("mongoose");
const bCrypt = require("bcryptjs");
// const timespan = require("jsonwebtoken/lib/timespan");

const filtersSchema = new Schema({
    filter: {
        type: String,
        required: [true, "Filter required"],
    },
    name: {
        type: String,
        required: [true, "Name required"],

    },
    imgURL: {
        type: String,
        required: [true, "ImgURl required"]
    }
},);


const Filters = model("filters", filtersSchema);

module.exports = Filters;