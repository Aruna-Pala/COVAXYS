const Appointment = require("../models/Appointment");
const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.getAppointmentById = async (req, res, next) => {
  // validate and send errors
  // search for the appointment
  // return appointment json

  const appointment = await Appointment.findById(req.params.id);
  if (appointment) {
    res.status(200).json(appointment);
  } else {
    return res
      .status(401)
      .json({ msg: "Appointment Not found for this id : " + req.params.id });
  }
};

exports.createAppointment = async (req, res, next) => {
  try {
    // validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    // check for existing user
    const patient = req.user.id;
    const { time, vaccinationCenter, address, vaccineReceived } = req.body;
    // if (!(await User.findOne({ _id: patient }))) {
    //     return res.status(400).json({ errors: [{ msg: "User Invalid" }] });
    // }

    // create and save user
    const appointment = new Appointment({
      patient: patient,
      time: time,
      vaccinationCenter: vaccinationCenter,
      address: address,
      vaccineReceived: vaccineReceived,
    });
    await appointment.save();

    res.status(200).json({ msg: "appointment scheduled successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
};

exports.getAllUserAppointment = async (req, res, next) => {
  try {
    const appointments = await Appointment.find({ patient: req.user.id });
    if (appointments) {
      res.status(200).json(appointments);
    } else {
      return res.status(401).json({ msg: "No Appointments found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
};
