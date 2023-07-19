import {createSlice} from "@reduxjs/toolkit";

export const postSlices = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        getPosts: (state, action) => {
            state.posts = action.payload;
        }
    }
});
export const {getPosts} = postSlices.actions;
export default postSlices.reducer;