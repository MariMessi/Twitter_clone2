import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./index.css";

const Modal = ({setModalVisibility}) => {
 const [titleInput, setTitleInput] = useState("");
 const [contentInput, setContentInput] = useState("");
 const [idInput, setIdInput] = useState (null);

 const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({
            title: titleInput,
            message: contentInput,
            userId: idInput,
        }),
    });

    
    setModalVisibility(false);
 };
 const onHandleClick = () => {
    setModalVisibility(false);
 };

    return(
        <div className="Modal">
            <div className="overlay" onClick={onHandleClick}></div>
                <div className="form_conteiner">
                 <h3>Add New Posts</h3>
                 
                 <button onClick={onHandleClick}  className="closing_button"> <AiOutlineCloseCircle/> </button>
                 <form onSubmit={onHandleSubmit} className="Modal_form">
                 <input className="textBox" value ={titleInput} onChange= {(e) => setTitleInput(e.target.value)}type="text" placeholder="Give me a title" required />
                 <input className="textBox" value ={contentInput} onChange= {(e) => setContentInput(e.target.value)}type= "text" placeholder="Give me a content" required />
                 <input className="textBox" value ={idInput} onChange= {(e) => setIdInput(e.target.value)}type ="number" placeholder="Give me an ID" required />   
                 <input onClick = {onHandleSubmit} className="submit" type="submit" value="Give me a push!"/>
                 <button onClick={onHandleClick} className="close_modal">Ooops! I changed my mind!"</button>
                </form>
                         
                
            </div>
        </div>
    );
};

export default Modal;