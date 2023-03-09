import "./index.css";
import Header from "../header";
import PostList from "../postList";

const Content = () => {
    return (
        <div className="Content">
            <Header />
            <PostList />
        </div>
    );
};

export default Content;