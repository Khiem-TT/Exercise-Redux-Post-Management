import {configureStore} from "@reduxjs/toolkit";
import postReducer from '../features/posts/postSlices.jsx'
import newPostReducer from '../features/posts/newPostSlices.jsx'

export const store = configureStore({
    reducer: {
        post: postReducer,
        newPost: newPostReducer
    }
})