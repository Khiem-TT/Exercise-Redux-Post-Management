import {createSlice} from "@reduxjs/toolkit";

export const postSlices = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        getPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPosts: (state, action) => {
            state.posts.push(action.payload);
        }
    }
});
export const {getPosts, addPosts} = postSlices.actions;
export default postSlices.reducer;