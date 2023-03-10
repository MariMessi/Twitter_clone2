import "./index.css";
import Header from "../header";
import PostList from "../postList";

const Content = ({setModalVisibility}) => {
    return (
        <div className="Content">
            <Header />
            <PostList setModalVisibility={setModalVisibility}/>
        </div>
    );
};

export default Content;