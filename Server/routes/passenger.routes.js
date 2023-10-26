const router = require("express").Router();
const passengerController = require("../controllers/passenger.controller");

router.get("/", passengerController.getAllUsers);
router.post("/ByFilter", passengerController.getUsersByFiltrer);

module.exports = router;