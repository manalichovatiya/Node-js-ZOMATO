const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        full_name:{
            type: String,
            trim: true,
        },
        email:{
            type: String,
            trim: true,
        },
        address:{
            type: String,
            trim: true,
        },
        password:{
            type: String,
            private: true
        },
        phone_number:{
            type: Number,
            trim: true,
        },
        is_active:{
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Users = mongoose.model("Users" , userSchema);
module.exports = Users;