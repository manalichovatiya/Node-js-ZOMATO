const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
    {
        Owner:{
            type: mongoose.Types.ObjectId,
            ref: "owner"
        },
        Restaurant:{
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Admin = mongoose.model("Admin",adminSchema);
module.exports = Admin;