const express = require("express");
const router = express.Router();

// import controller.
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

// define Api routes
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);

router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;