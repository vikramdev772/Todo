import { Router } from "express";
import { getTodos, addTodo,updateTodo,deleteTodo } from "../controller/todoController";

const router = Router();

router.get("/", (req, res) => {
    res.json({ msg: "api router" });
});

// GET all todos
router.get("/todo", getTodos);   //curl -X GET http://127.0.0.1:5050/api/todo

// POST new todo
router.post("/todo", addTodo);   //curl -X POST http://localhost:5050/api/todos -H "Content-Type: application/json" -d "{\"title\": \"Complete backend development tutorial\", \"description\": \"Finish the todo app backend tutorial and understand CRUD operations\", \"completed\": false}"

// Update a todo by ID
router.put("/:id",updateTodo);  //curl -X PUT http://localhost:5050/api/todos/<TODO_ID> -H "Content-Type: application/json" -d '{"title": "Updated title", "description": "Updated description", "completed": true}'


// Delete a todo by ID
router.delete("/todos/:id",deleteTodo);  //curl -X DELETE http://localhost:5050/api/todos/<TODO_ID>


export default router;
