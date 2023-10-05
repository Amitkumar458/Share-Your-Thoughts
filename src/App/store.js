import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/counter/counterSlice';
import todoslice from "../feature/ToDoList/todoslice";
import postSlice from "../feature/posts/postSlice";

const store = configureStore({
    reducer:{
        counter:counterReducer,
        todoslice:todoslice,
        postSlice:postSlice
    }
});

export {store};