const express = require('express');
const router = express.Router();
const Todo = require('../model/todo');

router.delete('/', async (req, res) => {
  let id = {
    _id: req.body.id,
  };
  try {
    await Todo.deleteOne(id);
    res.status(200).json({
      datadeletede: true,
    });
  } catch (error) {
    res.status(503).send(error);
  }
});

module.exports = router;
