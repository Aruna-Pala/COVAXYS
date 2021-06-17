const mongoose = require('mongoose');

const Appointment = require('../models/Appointment');
const User = require('../models/User');

exports.matchAppointmentWithLoggedInUser = async (req, res, next) => {
    const loggedInUser = req.user;
    const appointment = await Appointment.findById(req.params.id);
    const user = await User.findById(loggedInUser.id);
    // error if the logged in user does not match appointment owner and
    // logged in user not a doctor
    if(loggedInUser.id !== appointment.patient._id.toString() && user.role !== 'doctor') {
        return res.status(401).json({ msg: 'Not authorized' });
    }

    next();
}