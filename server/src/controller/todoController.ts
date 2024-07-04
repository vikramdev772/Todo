import {Request,Response} from "express";
import Todo from "../models/todoModel";

export const getTodos = async (req:Request,res:Response):Promise<void>=>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }catch(error){
        res.status(500).json({msg: "server error"});
    }
};

export const addTodo = async (req: Request,res: Response):Promise<void>=>{
    const {title,description} = req.body;
    try {
        const newTodo = new Todo({
            title,
            description,
            completed: false,
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    }catch(error){
        res.status(500).json({msg:"Server error"});
    }
}


export const updateTodo = async( req: Request ,res: Response)=>{
    const {id} = req.params;
    const {title,description,completed}=req.body;
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {title,description,completed},
            {new: true,runValidators: true}
        );
        if(!updateTodo){
            return res.status(404).json({msg: "Todo not found "});

        }
        res.json(updateTodo);
    }catch(err){
        res.status(500).json({msg: "internal server error"});
    }
}

export const deleteTodo = async(req: Request , res: Response)=>{
    const {id} = req.params;
    try{
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if(!deletedTodo) {
            return res.status(404).json({msg: "Todo not found "});
        }
        res.json({msg: "Todo deleted "});
    }catch(err){
        res.status(500).json({msg: "internal server error "});
    }

}

