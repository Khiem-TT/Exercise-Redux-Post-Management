import './App.css'
import Post from "./components/Post.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddPostForm from "./components/AddPostForm.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Post/>}/>
                <Route path='/add' element={<AddPostForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
