import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {getPosts} from "../features/posts/postSlices.jsx";
import {Link} from "react-router-dom";

function Post() {
    const posts = useSelector(state => state.post.posts);
    const newPosts = useSelector(state => state.newPost.newPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                dispatch(getPosts(res.data));
            })
    }, []);

    return (
        <div>
            <h1>Count: {posts.length + newPosts.length}</h1>
            <h1>Post</h1>
            <Link to='/add'>
                <Button variant="contained" color="success">
                    Add new Post
                </Button>
            </Link>
            {[...posts, ...newPosts].map(post => (
                <>
                    <Card sx={{maxWidth: 345}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.body}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit
                            </Button>
                        </CardActions>
                    </Card>
                    <br/>
                </>
            ))}
        </div>
    )
}

export default Post;