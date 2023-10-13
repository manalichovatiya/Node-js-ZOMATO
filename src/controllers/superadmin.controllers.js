const { superadminService } = require("../services");

/** create superadmin */
const createSuperadmin = async (req, res) => {
  try {
    const reqBody = req.body;
    const superadmin = await superadminService.createSuperadmin(reqBody);
    if (!superadmin) {throw new Error("Something went wrong, please try again or later!")}
    res.status(200).json({
      success: true,
      message: "Superadmin create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get superadmin list */
const getSuperadminList = async (req, res) => {
  try {
    const getList = await superadminService.getSuperadminList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get superadmin list successfully!",
      data: getList ,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get superadmin details by id */
const getSuperadminDetails = async (req, res) => {
  try {
    const getDetails = await superadminService.getSuperadminById(req.params.superadminId);
    if (!getDetails) {throw new Error("Superadmin not found!")}
    res.status(200).json({
      success: true,
      message: "Superadmin details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** superadmin details update by id */
const updateDetails = async (req, res) => {
  try {
    const reqBody = req.body;
    const superadminId = req.params.superadminId;
    const superadminExists = await superadminService.getSuperadminById(superadminId);
    if (!superadminExists) {throw new Error("Superadmin not found!")}
    await superadminService.updateDetails(superadminId, reqBody);

    res.status(200)
      .json({ success: true, message: "Superadmin details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete superadmin */
const deleteSuperadmin = async (req, res) => {
  try {
    const superadminId = req.params.superadminId;
    const superadminExists = await superadminService.getSuperadminById(superadminId);
    if (!superadminExists) { throw new Error("Superadmin not found!")}
    await superadminService.deleteSuperadmin(superadminId);

    res.status(200).json({
      success: true,
      message: "Superadmin delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSuperadmin,
  getSuperadminList,
  getSuperadminDetails,
  updateDetails,
  deleteSuperadmin,
};