const { ownerService } = require("../services");

/** create owner */
const createOwner = async (req, res) => {
  try {
    const reqBody = req.body;
    const owner = await ownerService.createOwner(reqBody);
    if (!owner) {throw new Error("Something went wrong, please try again or later!")}
    res.status(200).json({
      success: true,
      message: "Owner create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get owner list */
const getOwnerList = async (req, res) => {
  try {
    const getList = await ownerService.getOwnerList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get owner list successfully!",
      data: getList ,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get owner details by id */
const getOwnerDetails = async (req, res) => {
  try {
    const getDetails = await ownerService.getOwnerById(req.params.ownerId);
    if (!getDetails) {throw new Error("Owner not found!")}
    res.status(200).json({
      success: true,
      message: "Owner details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** owner details update by id */
const updateDetails = async (req, res) => {
  try {
    const reqBody = req.body;
    const ownerId = req.params.ownerId;
    const ownerExists = await ownerService.getOwnerById(ownerId);
    if (!ownerExists) {throw new Error("Owner not found!")}
    await ownerService.updateDetails(ownerId, reqBody);

    res.status(200)
      .json({ success: true, message: "Owner details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete owner */
const deleteOwner = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const ownerExists = await ownerService.getOwnerById(ownerId);
    if (!ownerExists) { throw new Error("Owner not found!")}
    await ownerService.deleteOwner(ownerId);

    res.status(200).json({
      success: true,
      message: "Owner delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createOwner,
  getOwnerList,
  getOwnerDetails,
  updateDetails,
  deleteOwner,
};