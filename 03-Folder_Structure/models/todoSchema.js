import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50
        },
        description: {
            type: String,
            required: true,
            maxLength: 100
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
