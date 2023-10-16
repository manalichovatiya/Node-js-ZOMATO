const express = require("express");
const userRoute = require("./v1/user.route");
const adminRoute = require("./v1/admin.route");
const cityRoute = require("./v1/city.route");
const countryRoute = require("./v1/country.route");
const menuRoute = require("./v1/menu.route");
const ownerRoute = require("./v1/owner.route");
const paymentRoute = require("./v1/payment.route");
const restaurantRoute = require("./v1/restaurant.route");
const stateRoute = require("./v1/state.route");
const superadminRoute = require("./v1/superadmin.route");
const tokenRoute = require("./v1/token.route");

const router = express.Router();

router.use("/user" , userRoute);
router.use("/admin" , adminRoute);
router.use("/city" , cityRoute);
router.use("/country" , countryRoute);
router.use("/menu" , menuRoute);
router.use("/owner" , ownerRoute);
router.use("/payment" , paymentRoute);
router.use("/restaurant" , restaurantRoute);
router.use("/state" , stateRoute);
router.use("/superadmin" , superadminRoute);
router.use("/token" , tokenRoute);

module.exports = router;