const mongoose = require("mongoose");
const citySchema = new mongoose.Schema(
    {
        city_name:{
            type: String,
            trim: true
        },
        State:{
            type: mongoose.Types.ObjectId,
            ref: "State"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const City = mongoose.model("City",citySchema);
module.exports = City;