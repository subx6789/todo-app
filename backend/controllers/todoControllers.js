const Todo = require("../models/Todo");
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
const createTodo = async (req, res) => {
  const { text } = req.body;
  try {
    const todo = new Todo({
      user: req.user.id,
      text,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.json({
      message: "Todo removed",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
