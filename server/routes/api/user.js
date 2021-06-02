const express = require('express');
const { body } = require('express-validator');
const userController = require('../../controllers/userController');

const router = express.Router();

const isAuth = require('../../middlewares/isAuth');

// @route   POST api/users
// @desc    Register user
// @access  public
router.post(
  '/',
  [
    body('name', 'Invalid name').trim().not().isEmpty(),
    body('email', 'Invalid email').trim().isEmail(),
    body('password', 'Enter valid password with min length of 6 char')
      .trim()
      .isLength({ min: 6 }),
  ],
  userController.postUser
);

// @route   GET api/users/:id
// @desc    Get user by id
// @access  protected
router.get('/:id', isAuth, userController.getUserById);

module.exports = router;

/*
// routes
userRouter.post('/register', register);
userRouter.post('/authenticate', authenticate);
userRouter.get('/', getAll);
userRouter.get('/:id', getById);
userRouter.put('/:id', update);
userRouter.delete('/:id', _delete);

export default userRouter;

function register(req, res, next) {
    userController.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function authenticate(req, res, next) {
    userController.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userController.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userController.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userController.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userController.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
*/
