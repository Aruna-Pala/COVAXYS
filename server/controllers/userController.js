const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/User');

exports.registerUser = async (req, res, next) => {
  try {
    // validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    // check for existing user
    const { firstName, lastName, DOB, role, email, password } = req.body;
    if (await User.findOne({ email: email })) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create and save user
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      DOB: DOB,
      role: role,
      email: email,
      password: hashedPassword,
    });
    await user.save();

    // return jwt
    const payload = {
      user: {
        id: user._id,
      },
    };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ token });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
};

exports.authenticate = async (req, res, next) => {
  try {
    // validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    // check for existing user
    const { firstName, lastName, DOB, role, email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'User does not exist' }] });
    }

    // Match password
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // return jwt
    const payload = {
      user: {
        id: user._id,
      },
    };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ token });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
};

/*
const userController = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await User.find();
}

async function getById(id) {
  return await User.findById(id);
}

async function update(id, userParam) {
  const user = await User.findById(id);

  // validate
  if (!user) throw 'User not found';
  if (
    user.email !== userParam.email &&
    (await User.findOne({ email: userParam.email }))
  ) {
    throw 'email "' + userParam.email + '" is already taken';
  }

  // hash password if it was entered
  if (userParam.password) {
    userParam.passwordHash = bcrypt.hashSync(userParam.password, 10);
  }

  // copy userParam properties to user
  Object.assign(user, userParam);

  await user.save();
}

async function _delete(id) {
  await User.findByIdAndRemove(id);
}

export default userController;
*/
