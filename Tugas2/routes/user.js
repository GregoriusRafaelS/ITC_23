const express = require('express');
const router = express.Router();
const { getAllUser, getUserById, addUser, deleteUserById } =  require('../controller/user');

//GET /users (ENDPOINT 1)
router.get("/users", getAllUser);

//GET /users/:userId -> GET /users/1
router.get("/users/:userId", getUserById);

//POST /users
router.post("/users", addUser);

//PUT /users

//DELETE /users/:userId
router.delete("/users/:userId", deleteUserById);

router.a

module.exports = router;