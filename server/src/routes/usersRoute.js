const { Router } = require('express');
const getUsers = require('../handlers/Users/getUser');
const getUser = require('../handlers/Users/getUserById');
const deleteUser = require('../handlers/Users/deleteUser');
const postUser = require('../handlers/Users/postUser');
const putUser = require('../handlers/Users/putUser');

const usersRouter = Router();

usersRouter.post("/user", postUser);

usersRouter.get("/user", getUsers);

usersRouter.get("/user/:id", getUser);

usersRouter.put("/user", putUser);

usersRouter.delete("/user", deleteUser);

module.exports = usersRouter