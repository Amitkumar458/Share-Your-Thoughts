import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"listdata",
    initialState:[{name:"Amit kumar" , type:true}],
    reducers:{
        addlist:{
            reducer(state , action){
                state.push(action.payload);
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
        },
        clearlist(state){
            state = [];
        }
    }
});

export default todoSlice.reducer;

export const {addlist , deletelist , clearlist} = todoSlice.actions;