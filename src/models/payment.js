const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema(
    {
        payment_method:{
            type: String,
            trim: true
        },
        Users:{
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        Menu:{
            type: mongoose.Types.ObjectId,
            ref: "menu"
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Payment = mongoose.model("Payment",paymentSchema);
module.exports = Payment;