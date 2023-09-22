import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/counter/counterSlice';
import todoslice from "../feature/ToDoList/todoslice";

const store = configureStore({
    reducer:{
        counter:counterReducer,
        todoslice:todoslice
    }
});

export {store};