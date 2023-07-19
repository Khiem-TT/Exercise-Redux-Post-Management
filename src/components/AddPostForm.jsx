import {useState} from "react";
import {useDispatch} from "react-redux";
import {addNewPosts} from "../features/posts/newPostSlices.jsx";

function AddPostForm() {
    const [post, setPost] = useState({
        title: '',
        body: ''
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value});
    }
    const handleClick = () => {
        dispatch(addNewPosts(post));
        setPost({
            title: '',
            body: ''
        });
    }

    return (
        <div>
            <h1>Add new Post</h1>
            <input
                type="text"
                value={post.title}
                name='title'
                onChange={handleChange}
                placeholder='Title'
            />
            <br/>
            <textarea
                name="body"
                value={post.body}
                onChange={handleChange}
                placeholder='Content'
            />
            <br/>
            <button type='button' onClick={handleClick}>
                Add Post
            </button>
        </div>
    )
}

export default AddPostForm;