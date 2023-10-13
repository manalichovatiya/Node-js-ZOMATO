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
        FoodImage:{
            type: mongoose.Types.ObjectId,
            ref: "food_image"
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Menu = mongoose.model("Menu",menuSchema);
module.exports = Menu;