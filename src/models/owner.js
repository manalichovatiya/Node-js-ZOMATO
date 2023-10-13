const mongoose = require("mongoose");
const ownerSchema = new mongoose.Schema(
    {
        owner_name:{
            type: String,
            trim: true
        },
        mobile_no:{
            type: String,
            trim: true
        },
        email:{
            type: String,
            trim: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Owner = mongoose.model("Owner",ownerSchema);
module.exports = Owner;