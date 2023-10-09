import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//create Action

export const createPost = createAsyncThunk("createPost",async(data,{rejectWithValue})=>{
const response = await fetch("https://redux-api-amitkumar458.vercel.app/api/post",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
});

try {
    const result = await response.json();
    return result
} catch (error) {
    return rejectWithValue(error)
}

})

export const fetchPost = createAsyncThunk("fetchPost",async(data,{rejectWithValue})=>{
const response = await fetch("https://redux-api-amitkumar458.vercel.app/api/get");

try {
    const result = await response.json();
    return result
} catch (error) {
    return rejectWithValue(error)
}

})



const initialState = {
  posts: [
    {
      name: "Amit kumar",
      title: "We Must Love Once In Our Life",
      description:
        "Love is a one of the best feeling of our life. the feeling of that first love/crush...when the hormones and feelings used to touch the peak and there's comes a feeling which can never be expressed in words. Love is a quality that defines human beings. Love is a quality of the human heart. It is a feeling that the human species can express. It is love that brings and keeps people together in harmony and happiness.",
      date: "23-june-2023",
    },
  ],
  loading: false,
  eroor: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost:(state,action)=>{
        state.posts.push(action.payload)
    }

  },
  extraReducers:{
    // for fetching 
    [fetchPost.pending]: (state)=>{
        state.loading = true
    },
    [fetchPost.fulfilled]: (state,action)=>{
        state.loading = false
        state.posts.push(...action.payload.data.rows)
    },
    [fetchPost.rejected]: (state,action)=>{
        state.loading = false
        state.error = action.payload.error
    },
    // for creating 
    [createPost.pending]: (state)=>{
        state.loading = true
    },
    [createPost.fulfilled]: (state,action)=>{
        state.loading = false
        state.posts.push(...action.payload.data.rows)
    },
    [createPost.rejected]: (state,action)=>{
        state.loading = false
        state.error = action.payload.error
    },
  }
});
export const {addPost} = postSlice.actions
export default postSlice.reducer;
