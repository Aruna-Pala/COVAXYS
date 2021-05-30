import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

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