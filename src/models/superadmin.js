const mongoose = require("mongoose");
const superadminSchema = new mongoose.Schema(
    {
        Admin:{
            type: mongoose.Types.ObjectId,
            ref: "admin"
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Superadmin = mongoose.model("Superadmin",superadminSchema);
module.exports = Superadmin;