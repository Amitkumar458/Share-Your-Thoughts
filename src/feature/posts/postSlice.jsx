import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "Amit kumar",
        title: "We Must Love Once In Our Life",
        description: "Love is a one of the best felling of our life. the feeling of that first love/crush...when the hormones and feelings used to touch the peak and there's comes a feeling which can never be expressed in words. Love is a quality that defines human beings. Love is a quality of the human heart. It is a feeling that the human species can express. It is love that brings and keeps people together in harmony and happiness.",
        date: "23-june-2023"
    }
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        
    }
})

export default postSlice.reducer;