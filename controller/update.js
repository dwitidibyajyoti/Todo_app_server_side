const express = require('express');
const router = express.Router();

const Todo = require('../model/todo');

router.put('/', async (req, res) => {
  let id = {_id: req.body.id};
  let todo = {todo: req.body.todo};
  const options = {returnNewDocument: true};

  try {
    const update = await Todo.findOneAndUpdate(id, todo, options);
    res.status(201).json({dataupdate: true});
  } catch (error) {
    res.status(501).send(error);
  }
});

module.exports = router;
