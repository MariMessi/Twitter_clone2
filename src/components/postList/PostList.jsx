import { useState, useEffect } from "react";
import postItem from "../postItem";
import PostItem from "../postItem/PostItem";
import "./index.css";

const PostList = ({ setModalVisibility }) => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/posts").then((res) => res.json())
        .then(({posts}) => setPostList(posts));
    }, []);
    return (
        <div className="PostList">
            {postList.map((post) => (
                <PostItem postData={post} key = {post.id} setModalVisibility={setModalVisibility}/>
            ))}
        </div>
    );
};

export default PostList;