const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// CREATE
router.post("/tasks", async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    if (!title || !description || completed === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const task = new Task({ title, description, completed });
    await task.save();

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// READ ALL
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// READ ONE
router.get("/tasks/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
});

// UPDATE
router.put("/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
});

// DELETE
router.delete("/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json({ message: "Task deleted" });
});

module.exports = router;