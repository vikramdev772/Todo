import mongooe , {Schema,Document} from "mongoose";
import { title } from "process";

export interface Todo extends Document{
    title: string;
    description: string;
    completed: boolean;
}

const TodoSchema:Schema=new Schema({
    title: {type:String,required:true},
    description:{type:String,required:true},
    completed:{type: Boolean,default:false},

})

export default mongooe.model<Todo>("Todo",TodoSchema);
