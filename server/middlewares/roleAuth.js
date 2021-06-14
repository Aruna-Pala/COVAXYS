const mongoose = require('mongoose');

const Appointment = require('../models/Appointment');

exports.matchAppointmentWithLoggedInUser = async (req, res, next) => {
    const loggedInUser = req.user;
    const appointment = await Appointment.findById(req.params.id);
    // error if the logged in user does not match appointment owner and
    // logged in user not a doctor
    if(loggedInUser._id !== appointment.patient && loggedInUser.role !== 'doctor') {
        return res.status(401).json({ msg: 'Not authorized' });
    }

    next();
}