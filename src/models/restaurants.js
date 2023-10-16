const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema(
    {
        restaurant_name:{
            type: String,
            trim: true
        },
        Owner:{
            type: mongoose.Types.ObjectId,
            ref: "Owner"
        },
        address:{
            type: String,
            trim: true
        },
        contact_no:{
            type: Number,
            trim: true
        },
        whatapp_notifaction:{
            type: String,
            trim: true
        },
        restaurant_open_time:{
            type: String,
            trim: true
        },
        restaurant_type:{
            type: String,
            trim: true
        },
        restaurant_image:{
            type: String,
            trim: true
        },
        restaurant_status:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Restaurant = mongoose.model("Restaurant",restaurantSchema);
module.exports = Restaurant;