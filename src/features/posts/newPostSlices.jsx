import {createSlice} from "@reduxjs/toolkit";

export const newPostSlices = createSlice({
    name: 'newPosts',
    initialState: {
        newPosts: []
    },
    reducers: {
        addNewPosts: (state, action) => {
            state.newPosts.push(action.payload);
        }
    }
});
export const {addNewPosts} = newPostSlices.actions;
export default newPostSlices.reducer;