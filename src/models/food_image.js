const mongoose = require("mongoose");
const foodImageSchema = new mongoose.Schema(
    {
        food_image:{
            type: String,
            trim: true
        },
        image_dec:{
            type: String,
            trim: true
        },
        food_price:{
            type: String,
            trim: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const FoodImage = mongoose.model("FoodImage",foodImageSchema);
module.exports = FoodImage;