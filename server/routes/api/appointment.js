const express = require("express");
const { body } = require("express-validator");

const isAuth = require("../../middlewares/isAuth");
const roleAuth = require("../../middlewares/roleAuth");
const appointmentController = require("../../controllers/appointmentController");

const router = express.Router();



// @route   GET api/appointment/:id
// @desc    Get an appointment by id
// @access  protected
router.get(
    "/getAllUserAppointment",
    isAuth,
    appointmentController.getAllUserAppointment
);

// @route   GET api/appointment/:id
// @desc    Get an appointment by id
// @access  protected
router.get(
    "/:id",
    isAuth,
    roleAuth.matchAppointmentWithLoggedInUser, [],
    appointmentController.getAppointmentById
);





// @route   POST api/appointment
// @desc    Create a new appointment. User needs to be registered beforehand.
// @access  protected
router.post(
    "/schedule",
    isAuth, [
        body("time", "time is required").trim().notEmpty(),
        body("vaccinationCenter", "vaccinationCenter is required").trim().notEmpty(),
        body("address", "address required").trim().notEmpty(),
        body("vaccineReceived", "vaccineReceived is required").trim().notEmpty(),
    ],
    appointmentController.createAppointment
);

module.exports = router;