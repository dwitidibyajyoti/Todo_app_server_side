const express = require('express');
const router = express.Router();
const Todo = require('../model/todo');

router.get('/', async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
