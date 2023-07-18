import {createSlice} from "@reduxjs/toolkit";

export const newPostSlices = createSlice({
    name: 'newPosts',
    initialState: {
        newPosts: []
    },
    reducers: {
        getNewPosts: (state, action) => {
            state.newPosts = action.payload;
        },
        addNewPosts: (state, action) => {
            state.newPosts.push(action.payload);
        }
    }
});
export const {getNewPosts, addNewPosts} = newPostSlices.actions;
export default newPostSlices.reducer;