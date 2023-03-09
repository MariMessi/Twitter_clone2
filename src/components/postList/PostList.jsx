import { useState, useEffect } from "react";
import postItem from "../postItem";
import PostItem from "../postItem/PostItem";
import "./index.css";

const PostList = () => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/posts").then((res) => res.json())
        .then(({posts}) => setPostList(posts));
    }, []);
    return (
        <div className="PostList">
            {postList.map((post) => (
                <PostItem postData={post} key = {post.id} />
            ))}
        </div>
    );
};

export default PostList;