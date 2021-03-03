const express = require('express');
const router = express.Router();
const Todo = require('../model/todo');

router.post('/', async (req, res) => {
  const todo = new Todo({
    todo: req.body.todo,
  });

  try {
    const save = await todo.save();
    res.status(201).json(save);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
