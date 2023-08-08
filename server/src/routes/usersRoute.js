const { Router } = require('express');
const getUsers = require('../handlers/Users/getUser');
const getUser = require('../handlers/Users/getUserById');
const deleteUser = require('../handlers/Users/deleteUser');
const postUser = require('../handlers/Users/postUser');
const putUser = require('../handlers/Users/putUser');

const usersRouter = Router();

usersRouter.post("/", postUser);

usersRouter.get("/", getUsers);

usersRouter.put("/user", putUser);

usersRouter.delete("/user", deleteUser);

usersRouter.get("/user/:id", getUser);

module.exports = usersRouter