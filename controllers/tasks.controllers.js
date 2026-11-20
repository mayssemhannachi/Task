import Task from "../models/Task.js";

export async function getAllTasks(req,res) {
    try {
    const tasks = await Task.find();
    res.status(200).json({ data: tasks });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getTaskById(req,res) {
    try {
        console.log("id", req.params.id);
        const task = await Task.findById(req.params.id);
        if (!task) {
          res.status(404).send("task not found");
        } else {
          res.status(200).json({ data: task });
        }
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
}

export async function createTask(req,res) {
    try {
        console.log("req.body: ", req.body);
        const newTask = await Task.create(req.body);
        res.status(201).json({ data: newTask });
      } catch (err) {
        res.status(400).send({ error: err.message });
      }
}

export async  function updateTask(req,res) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
          returnDocument: "after",
          runValidators: true,
        });
        if (!task) {
          res.status(404).send("task not found");
        } else {
          res.status(200).json({ data: task });
        }
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
}

export async function deleteTask(req,res) {
    try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).send("task not found");
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}