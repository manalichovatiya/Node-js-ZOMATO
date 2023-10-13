const express = require("express");
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const cityRoute = require("./city.route");
const countryRoute = require("./country.route");
const foodimageRoute = require("./foodimage.route");
const menuRoute = require("./menu.route");
const ownerRoute = require("./owner.route");
const paymentRoute = require("./payment.route");
const restaurantRoute = require("./restaurant.route");
const restimageRoute = require("./restimage.route");
const stateRoute = require("./state.route");
const superadminRoute = require("./superadmin.route");

const router = express.Router();

router.use("/user" , userRoute);
router.use("/admin" , adminRoute);
router.use("/city" , cityRoute);
router.use("/country" , countryRoute);
router.use("/foodimage" , foodimageRoute);
router.use("/menu" , menuRoute);
router.use("/owner" , ownerRoute);
router.use("/payment" , paymentRoute);
router.use("/restaurant" , restaurantRoute);
router.use("/restimage" , restimageRoute);
router.use("/state" , stateRoute);
router.use("/superadmin" , superadminRoute);

module.exports = router;