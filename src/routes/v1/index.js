const express = require("express");
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const cityRoute = require("./city.route");
const countryRoute = require("./country.route");
const menuRoute = require("./menu.route");
const ownerRoute = require("./owner.route");
const paymentRoute = require("./payment.route");
const restaurantRoute = require("./restaurant.route");
const stateRoute = require("./state.route");
const superadminRoute = require("./superadmin.route");
const tokenRoute = require("./token.route");

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