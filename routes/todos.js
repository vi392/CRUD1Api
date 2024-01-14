const express = require("express");
const router = express.Router();

// import controller.
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");
// define Api routes
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);

module.exports = router;