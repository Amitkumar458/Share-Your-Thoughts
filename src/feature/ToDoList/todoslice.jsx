import { createSlice } from "@reduxjs/toolkit";

if(localStorage.getItem('lists') === null){
    localStorage.setItem('lists' , JSON.stringify([{name:"Example of Tasks" , type:true} , {name:"Tasks Completed" , type:false}]));
}

const todoSlice = createSlice({
    name:"listdata",
    initialState:JSON.parse(localStorage.getItem('lists')),
    reducers:{
        addlist:{
            reducer(state , action){
                state.push(action.payload);
                localStorage.setItem('lists' , JSON.stringify(state));
            },
            prepare(name , type){
                return {
                    payload: {
                        name:name,
                        type:type
                    }
                }
            }
        },
        deletelist(state , action){
            if(action.payload.type === false){
                state.splice(action.payload.id , 1);
            }else{
                state.splice(action.payload.id , 1);
                state.push({name:action.payload.name , type:false});
            }
            localStorage.setItem('lists' , JSON.stringify(state));
        },
        clearlist(state){
            state = [];
        }
    }
});

export default todoSlice.reducer;

export const {addlist , deletelist , clearlist} = todoSlice.actions;