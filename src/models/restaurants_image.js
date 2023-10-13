const mongoose = require("mongoose");
const restImageSchema = new mongoose.Schema(
    {
        rest_image:{
            type: String,
            trim: true
        },
        image_dec:{
            type: String,
            trim: true
        },
        rest_add:{
            type: String,
            trim: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const RestImage = mongoose.model("RestImage", restImageSchema);
module.exports = RestImage;