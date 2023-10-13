const { restaurantService } = require("../services");

/** create restaurant */
const createRestaurant = async (req, res) => {
  try {
    const reqBody = req.body;
    const restaurant = await restaurantService.createRestaurant(reqBody);
    if (!restaurant) {throw new Error("Something went wrong, please try again or later!")}
    res.status(200).json({
      success: true,
      message: "Restaurant create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get restaurant list */
const getRestaurantList = async (req, res) => {
  try {
    const getList = await restaurantService.getRestaurantList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get restaurant list successfully!",
      data: getList ,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurant details by id */
const getRestaurantDetails = async (req, res) => {
  try {
    const getDetails = await restaurantService.getRestaurantById(req.params.restaurantId);
    if (!getDetails) {throw new Error("Restaurant not found!")}
    res.status(200).json({
      success: true,
      message: "Restaurant details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** restaurant details update by id */
const updateDetails = async (req, res) => {
  try {
    const reqBody = req.body;
    const restaurantId = req.params.restaurantId;
    const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurantExists) {throw new Error("Restaurant not found!")}
    await restaurantService.updateDetails(restaurantId, reqBody);

    res.status(200)
      .json({ success: true, message: "Restaurant details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete restaurant */
const deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurantExists) { throw new Error("Restaurant not found!")}
    await restaurantService.deleteRestaurant(restaurantId);

    res.status(200).json({
      success: true,
      message: "Restaurant delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRestaurant,
  getRestaurantList,
  getRestaurantDetails,
  updateDetails,
  deleteRestaurant,
};