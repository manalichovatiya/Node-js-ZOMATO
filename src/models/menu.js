const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema(
    {
        food_name:{
            type: String,
            trim: true
        },
        drink_name:{
            type: String,
            trim: true
        },
        food_Image:{
            type: String,
            trim: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Menu = mongoose.model("Menu",menuSchema);
module.exports = Menu;