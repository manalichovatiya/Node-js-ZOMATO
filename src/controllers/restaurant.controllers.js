const { restaurantService , cityService} = require("../services");

/** create restaurant */
const createRestaurant = async (req, res) => {
  try {
    const reqBody = req.body;
    reqBody.restaurant_image = req.files[0].filename
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

//** Get restaurant details by city id*/
const getRestaurantBycity = async (req, res) =>{
  try {
    const cityExist = await cityService.getCityById(req.params.cityId)
    if(!cityExist){
        throw new Error("City name does not exist ! ")
    }
    const restaurantList = await restaurantService.restaurantBycity(req.params.cityId)
    console.log(restaurantList);
    res.status(200).json({
        success:true,
        message:"Restaurant list by city name dispatch sucessfully ! ",
        data: restaurantList
    })
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
}
}

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

/** Upate restaurant status */
const updateStatus = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurantExists) {throw new Error("Restaurant not found!")}
    const restaurantStatus = await restaurantService.updateStatus(restaurantId)
    if(!restaurantStatus){
        throw new Error("Something went wrong! ")
    }
    res.status(200).json({
        success:true,
        messgae:"Restaurant status updated successfully! "
    })
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
  getRestaurantBycity,
  updateDetails,
  updateStatus,
  deleteRestaurant,
};