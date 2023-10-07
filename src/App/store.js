import { configureStore } from "@reduxjs/toolkit";
import todoslice from "../feature/ToDoList/todoslice";
import postSlice from "../feature/posts/postSlice";

const store = configureStore({
    reducer:{
        todoslice:todoslice,
        postSlice:postSlice
    }
});

export {store};